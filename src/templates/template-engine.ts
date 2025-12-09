// Template engine that defines content structure and composition rules

import type { Template, FieldDefinition, TemplateRule } from "../types/index"

export class FAQTemplate implements Template {
  name = "FAQTemplate"
  description = "Template for generating FAQ pages from questions and answers"

  fields: FieldDefinition[] = [
    { name: "title", type: "string", required: true, description: "FAQ page title" },
    { name: "productName", type: "string", required: true, description: "Product name" },
    { name: "faqs", type: "array", required: true, description: "Array of Q&A pairs" },
    { name: "categories", type: "array", required: true, description: "FAQ categories" },
  ]

  rules: TemplateRule[] = []

  compose(blocks: Map<string, unknown>): Record<string, unknown> {
    return {
      title: blocks.get("title") || "Frequently Asked Questions",
      productName: blocks.get("productName"),
      faqs: blocks.get("faqs") || [],
      categories: blocks.get("categories") || [],
      generatedAt: new Date().toISOString(),
    }
  }
}

export class ProductPageTemplate implements Template {
  name = "ProductPageTemplate"
  description = "Template for generating product description pages"

  fields: FieldDefinition[] = [
    { name: "title", type: "string", required: true, description: "Page title" },
    { name: "overview", type: "string", required: true, description: "Quick overview" },
    { name: "ingredients", type: "string", required: true, description: "Ingredients block" },
    { name: "benefits", type: "string", required: true, description: "Benefits block" },
    { name: "usage", type: "string", required: true, description: "Usage instructions" },
    { name: "skinType", type: "string", required: true, description: "Skin type info" },
    { name: "sideEffects", type: "string", required: true, description: "Safety info" },
    { name: "pricing", type: "string", required: true, description: "Price info" },
  ]

  rules: TemplateRule[] = []

  compose(blocks: Map<string, unknown>): Record<string, unknown> {
    return {
      title: blocks.get("title") || "Product Information",
      sections: {
        overview: blocks.get("overview"),
        ingredients: blocks.get("ingredients"),
        benefits: blocks.get("benefits"),
        usage: blocks.get("usage"),
        skinType: blocks.get("skinType"),
        sideEffects: blocks.get("sideEffects"),
        pricing: blocks.get("pricing"),
      },
      generatedAt: new Date().toISOString(),
    }
  }
}

export class ComparisonPageTemplate implements Template {
  name = "ComparisonPageTemplate"
  description = "Template for generating product comparison pages"

  fields: FieldDefinition[] = [
    { name: "title", type: "string", required: true, description: "Comparison title" },
    { name: "productA", type: "object", required: true, description: "First product" },
    { name: "productB", type: "object", required: true, description: "Second product" },
    { name: "attributes", type: "array", required: true, description: "Comparison attributes" },
    { name: "verdict", type: "string", required: false, description: "Comparison verdict" },
  ]

  rules: TemplateRule[] = []

  compose(blocks: Map<string, unknown>): Record<string, unknown> {
    return {
      title: blocks.get("title") || "Product Comparison",
      comparison: {
        productA: blocks.get("productA"),
        productB: blocks.get("productB"),
        attributes: blocks.get("attributes") || [],
      },
      verdict: blocks.get("verdict"),
      generatedAt: new Date().toISOString(),
    }
  }
}
