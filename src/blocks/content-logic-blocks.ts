// Reusable content logic blocks that transform product data into structured copy

import type { ContentLogicBlock, Product } from "../types/index"

export class BenefitBlockGenerator implements ContentLogicBlock {
  name = "BenefitBlock"
  description = "Generates benefit-focused copy from product benefits"

  execute(product: Product): string {
    const benefitList = product.benefits.map((benefit) => `• ${benefit}`).join("\n")

    return `Key Benefits:\n${benefitList}`
  }
}

export class IngredientBlockGenerator implements ContentLogicBlock {
  name = "IngredientBlock"
  description = "Transforms ingredients into descriptive copy"

  execute(product: Product): string {
    const ingredientList = product.keyIngredients.join(", ")
    return `Primary Ingredients: ${ingredientList}`
  }
}

export class UsageBlockGenerator implements ContentLogicBlock {
  name = "UsageBlock"
  description = "Formats usage instructions clearly"

  execute(product: Product): string {
    return `Usage Instructions:\n${product.howToUse}`
  }
}

export class SideEffectsBlockGenerator implements ContentLogicBlock {
  name = "SideEffectsBlock"
  description = "Formats safety and side effect information"

  execute(product: Product): string {
    return `Safety Information:\n${product.sideEffects}`
  }
}

export class SkinTypeBlockGenerator implements ContentLogicBlock {
  name = "SkinTypeBlock"
  description = "Generates skin type compatibility information"

  execute(product: Product): string {
    const types = product.skinType.join(", ")
    return `Suitable For: ${types}`
  }
}

export class PricingBlockGenerator implements ContentLogicBlock {
  name = "PricingBlock"
  description = "Formats pricing information"

  execute(product: Product): string {
    const currency = product.currency || "₹"
    return `Price: ${currency}${product.price}`
  }
}

export class QuickOverviewBlockGenerator implements ContentLogicBlock {
  name = "QuickOverviewBlock"
  description = "Generates a concise product overview"

  execute(product: Product): string {
    return `${product.name} - ${product.concentration || "Premium Formula"} for ${product.skinType.join("/")} skin. ${product.benefits[0] && `Featuring ${product.benefits[0]}`}.`
  }
}
