// Comparison Agent: Responsible for generating product comparison pages

import { BaseAgent } from "./base-agent"
import type { AgentContext, Product, ComparisonAttribute } from "../types/index"
import { ComparisonPageTemplate } from "../templates/template-engine"

export class ComparisonAgent extends BaseAgent {
  name = "ComparisonAgent"
  description = "Generates product comparison pages"
  responsibility = "Compare primary product with a fictional competitor product"

  private createFictionalProduct(): Product {
    return {
      name: "RadiantGlow Serum Pro",
      concentration: "12% Vitamin C",
      skinType: ["Normal", "Dry"],
      keyIngredients: ["Vitamin C", "Ferulic Acid", "Vitamin E"],
      benefits: ["Deep hydration", "Anti-aging", "Brightening"],
      howToUse: "Apply 3-4 drops evenly across face at night",
      sideEffects: "Minimal irritation, suitable for sensitive skin",
      price: 899,
      currency: "₹",
    }
  }

  async execute(context: AgentContext): Promise<Record<string, unknown>> {
    this.log("Starting comparison page generation...")

    try {
      const productA = context.product
      const productB = this.createFictionalProduct()

      this.log(`Comparing ${productA.name} with ${productB.name}`)

      // Generate comparison attributes
      const attributes = this.generateComparison(productA, productB)

      // Use template to compose comparison page
      const template = new ComparisonPageTemplate()
      const comparisonPage = template.compose(
        new Map([
          ["title", `${productA.name} vs ${productB.name}`],
          ["productA", this.productToComparableFormat(productA)],
          ["productB", this.productToComparableFormat(productB)],
          ["attributes", attributes],
          ["verdict", this.generateVerdict(productA, productB)],
        ]),
      )

      this.log("Comparison page generated successfully")
      return comparisonPage
    } catch (error) {
      this.logError(`Failed to generate comparison page: ${error}`)
      throw error
    }
  }

  private generateComparison(productA: Product, productB: Product): ComparisonAttribute[] {
    return [
      {
        attribute: "Product Name",
        productA: productA.name,
        productB: productB.name,
        comparison: "Both are premium vitamin C serums",
      },
      {
        attribute: "Concentration",
        productA: productA.concentration || "N/A",
        productB: productB.concentration || "N/A",
        comparison:
          productB.concentration && productA.concentration ? `${productB.name} has higher concentration` : "Comparable",
      },
      {
        attribute: "Skin Type",
        productA: productA.skinType.join(", "),
        productB: productB.skinType.join(", "),
        comparison: "Different skin type focus",
      },
      {
        attribute: "Key Ingredients",
        productA: productA.keyIngredients.join(", "),
        productB: productB.keyIngredients.join(", "),
        comparison: `${productB.name} has additional antioxidant support`,
      },
      {
        attribute: "Price",
        productA: `₹${productA.price}`,
        productB: `₹${productB.price}`,
        comparison: `${productA.price < productB.price ? productA.name : productB.name} is more affordable`,
      },
      {
        attribute: "Side Effects",
        productA: productA.sideEffects,
        productB: productB.sideEffects,
        comparison: `${productB.name} reports fewer irritation issues`,
      },
    ]
  }

  private generateVerdict(productA: Product, productB: Product): string {
    return `${productA.name} is ideal for ${productA.skinType.join("/")} skin and offers excellent value at ₹${productA.price}. ${productB.name} is better suited for ${productB.skinType.join("/")} skin types and provides higher concentration benefits. Choose based on your skin type and budget preferences.`
  }

  private productToComparableFormat(product: Product): Record<string, unknown> {
    return {
      name: product.name,
      concentration: product.concentration,
      skinType: product.skinType,
      benefits: product.benefits,
      price: product.price,
    }
  }
}
