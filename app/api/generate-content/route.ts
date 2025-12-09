import type { Product } from "@/src/types"
import { Orchestrator } from "@/src/orchestrator/orchestrator"

export async function POST() {
  try {
    const glowBoostProduct: Product = {
      name: "GlowBoost Vitamin C Serum",
      concentration: "10% Vitamin C",
      skinType: ["Oily", "Combination"],
      keyIngredients: ["Vitamin C", "Hyaluronic Acid"],
      benefits: ["Brightening", "Fades dark spots"],
      howToUse: "Apply 2–3 drops in the morning before sunscreen",
      sideEffects: "Mild tingling for sensitive skin",
      price: 699,
      currency: "₹",
    }

    const orchestrator = new Orchestrator()
    const results = await orchestrator.orchestrate(glowBoostProduct)

    return Response.json({
      faq: results.get("faq"),
      productPage: results.get("product-page"),
      comparison: results.get("comparison"),
    })
  } catch (error) {
    console.error("Content generation error:", error)
    return Response.json(
      { error: error instanceof Error ? error.message : "Failed to generate content" },
      { status: 500 },
    )
  }
}
