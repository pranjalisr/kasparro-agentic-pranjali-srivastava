"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

interface GeneratedContent {
  faq: Record<string, unknown> | null
  productPage: Record<string, unknown> | null
  comparison: Record<string, unknown> | null
  status: "loading" | "success" | "error"
  error?: string
}

export default function Home() {
  const [content, setContent] = useState<GeneratedContent>({
    faq: null,
    productPage: null,
    comparison: null,
    status: "loading",
  })

  useEffect(() => {
    async function generateContent() {
      try {
        const response = await fetch("/api/generate-content", { method: "POST" })
        const data = await response.json()

        if (!response.ok) {
          setContent((prev) => ({
            ...prev,
            status: "error",
            error: data.error || "Failed to generate content",
          }))
          return
        }

        setContent({
          faq: data.faq,
          productPage: data.productPage,
          comparison: data.comparison,
          status: "success",
        })
      } catch (error) {
        setContent((prev) => ({
          ...prev,
          status: "error",
          error: error instanceof Error ? error.message : "Unknown error",
        }))
      }
    }

    generateContent()
  }, [])

  if (content.status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <Spinner className="w-12 h-12 mx-auto mb-4" />
          <p className="text-slate-600 font-medium">Generating content with agentic system...</p>
        </div>
      </main>
    )
  }

  if (content.status === "error") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <Card className="max-w-md border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-700">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600">{content.error}</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Agentic Content Generation</h1>
        <p className="text-slate-600 mb-12">Generated content from modular agent system</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">FAQ Page</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded text-sm overflow-auto max-h-96">
                {JSON.stringify(content.faq, null, 2)}
              </pre>
            </CardContent>
          </Card>

          {/* Product Page Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Product Page</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded text-sm overflow-auto max-h-96">
                {JSON.stringify(content.productPage, null, 2)}
              </pre>
            </CardContent>
          </Card>

          {/* Comparison Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Comparison Page</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded text-sm overflow-auto max-h-96">
                {JSON.stringify(content.comparison, null, 2)}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
