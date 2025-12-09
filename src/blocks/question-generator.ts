// Question generator block that creates categorized FAQs

import type { Product } from "../types/index"

export interface GeneratedQuestion {
  question: string
  category: string
  keyword: string
}

export class QuestionGeneratorBlock {
  name = "QuestionGenerator"
  description = "Generates structured user questions from product data"

  execute(product: Product): GeneratedQuestion[] {
    const questions: GeneratedQuestion[] = []

    // Informational questions
    questions.push(
      { question: `What is ${product.name}?`, category: "Informational", keyword: "product-intro" },
      {
        question: `What are the key ingredients in ${product.name}?`,
        category: "Informational",
        keyword: "ingredients",
      },
      { question: `What are the main benefits of ${product.name}?`, category: "Informational", keyword: "benefits" },
    )

    // Safety & Side Effects
    questions.push(
      { question: `Is ${product.name} safe for sensitive skin?`, category: "Safety", keyword: "sensitivity" },
      { question: `What are the side effects of ${product.name}?`, category: "Safety", keyword: "side-effects" },
      { question: `Who should not use ${product.name}?`, category: "Safety", keyword: "contraindications" },
    )

    // Usage questions
    questions.push(
      { question: `How do I use ${product.name}?`, category: "Usage", keyword: "usage-instructions" },
      { question: `How often should I use ${product.name}?`, category: "Usage", keyword: "frequency" },
      { question: `Can I use ${product.name} with other products?`, category: "Usage", keyword: "compatibility" },
    )

    // Purchase & Value
    questions.push(
      { question: `How much does ${product.name} cost?`, category: "Purchase", keyword: "pricing" },
      { question: `Where can I buy ${product.name}?`, category: "Purchase", keyword: "availability" },
      { question: `Is ${product.name} worth the price?`, category: "Purchase", keyword: "value" },
    )

    // Comparison
    questions.push(
      {
        question: `How does ${product.name} compare to similar products?`,
        category: "Comparison",
        keyword: "competitive-analysis",
      },
      { question: `What makes ${product.name} different?`, category: "Comparison", keyword: "differentiation" },
    )

    // Results & Expectations
    questions.push({
      question: `When will I see results from ${product.name}?`,
      category: "Results",
      keyword: "timeline",
    })

    return questions
  }
}
