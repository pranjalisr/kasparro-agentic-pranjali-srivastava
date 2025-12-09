// Main entry point: Demonstrates the complete agentic system

import type { Product } from "./types/index"
import { Orchestrator } from "./orchestrator/orchestrator"
import * as fs from "fs"
import * as path from "path"

// Product data (the only input)
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

async function main() {
  console.log("=".repeat(70))
  console.log("MODULAR AGENTIC AUTOMATION SYSTEM")
  console.log("Product Content Generation Pipeline")
  console.log("=".repeat(70))
  console.log()

  // Create orchestrator and run pipeline
  const orchestrator = new Orchestrator()
  const results = await orchestrator.orchestrate(glowBoostProduct)

  console.log("=".repeat(70))
  console.log("ORCHESTRATION COMPLETE")
  console.log("=".repeat(70))
  console.log()

  // Output results as JSON files
  const outputDir = path.join(process.cwd(), "output")
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Generate outputs
  const faqOutput = results.get("faq")
  const productPageOutput = results.get("product-page")
  const comparisonOutput = results.get("comparison")

  if (faqOutput) {
    fs.writeFileSync(path.join(outputDir, "faq.json"), JSON.stringify(faqOutput, null, 2))
    console.log("✓ Generated: output/faq.json")
  }

  if (productPageOutput) {
    fs.writeFileSync(path.join(outputDir, "product_page.json"), JSON.stringify(productPageOutput, null, 2))
    console.log("✓ Generated: output/product_page.json")
  }

  if (comparisonOutput) {
    fs.writeFileSync(path.join(outputDir, "comparison_page.json"), JSON.stringify(comparisonOutput, null, 2))
    console.log("✓ Generated: output/comparison_page.json")
  }

  console.log()
  console.log("All outputs generated successfully!")
}

main().catch(console.error)
