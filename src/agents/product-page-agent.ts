// Product Page Agent: Responsible for generating product description pages

import { BaseAgent } from "./base-agent"
import type { AgentContext } from "../types/index"
import { ProductPageTemplate } from "../templates/template-engine"
import {
  BenefitBlockGenerator,
  IngredientBlockGenerator,
  UsageBlockGenerator,
  SideEffectsBlockGenerator,
  SkinTypeBlockGenerator,
  PricingBlockGenerator,
  QuickOverviewBlockGenerator,
} from "../blocks/content-logic-blocks"

export class ProductPageAgent extends BaseAgent {
  name = "ProductPageAgent"
  description = "Generates product description pages from structured content blocks"
  responsibility = "Orchestrate content logic blocks to compose a complete product page"

  async execute(context: AgentContext): Promise<Record<string, unknown>> {
    this.log("Starting product page generation...")

    try {
      // Initialize content blocks
      const blocks = new Map([
        ["overview", new QuickOverviewBlockGenerator().execute(context.product)],
        ["ingredients", new IngredientBlockGenerator().execute(context.product)],
        ["benefits", new BenefitBlockGenerator().execute(context.product)],
        ["usage", new UsageBlockGenerator().execute(context.product)],
        ["skinType", new SkinTypeBlockGenerator().execute(context.product)],
        ["sideEffects", new SideEffectsBlockGenerator().execute(context.product)],
        ["pricing", new PricingBlockGenerator().execute(context.product)],
      ])

      this.log(`Composed ${blocks.size} content blocks`)

      // Add metadata block
      blocks.set("title", `${context.product.name} - Product Information`)

      // Use template to compose final page
      const template = new ProductPageTemplate()
      const productPage = template.compose(blocks)

      this.log("Product page generated successfully")
      return productPage
    } catch (error) {
      this.logError(`Failed to generate product page: ${error}`)
      throw error
    }
  }
}
