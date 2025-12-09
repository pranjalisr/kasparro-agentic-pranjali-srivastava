// FAQ Agent: Responsible for generating FAQ pages

import { BaseAgent } from "./base-agent"
import type { AgentContext } from "../types/index"
import { QuestionGeneratorBlock } from "../blocks/question-generator"
import { FAQTemplate } from "../templates/template-engine"

interface FAQEntry {
  question: string
  answer: string
  category: string
}

export class FAQAgent extends BaseAgent {
  name = "FAQAgent"
  description = "Generates FAQ pages from product data"
  responsibility = "Transform questions and product data into structured FAQ entries with answers"

  async execute(context: AgentContext): Promise<Record<string, unknown>> {
    this.log("Starting FAQ generation...")

    try {
      const questionGenerator = new QuestionGeneratorBlock()
      const generatedQuestions = questionGenerator.execute(context.product)

      this.log(`Generated ${generatedQuestions.length} questions`)

      // Generate answers based on product data and questions
      const faqEntries: FAQEntry[] = generatedQuestions.map((q) => ({
        question: q.question,
        category: q.category,
        answer: this.generateAnswer(q.question, q.keyword, context),
      }))

      // Group by category
      const categorized = this.groupByCategory(faqEntries)

      const template = new FAQTemplate()
      const faqPage = template.compose(
        new Map([
          ["title", "Frequently Asked Questions"],
          ["productName", context.product.name],
          ["faqs", faqEntries],
          ["categories", Object.keys(categorized)],
        ]),
      )

      this.log("FAQ page generated successfully")
      return faqPage
    } catch (error) {
      this.logError(`Failed to generate FAQ: ${error}`)
      throw error
    }
  }

  private generateAnswer(question: string, keyword: string, context: AgentContext): string {
    const { product } = context

    const answers: Record<string, string> = {
      "product-intro": `${product.name} is a skincare product featuring ${product.concentration || "a premium formulation"}. It is designed for ${product.skinType.join(" and ")} skin types.`,
      ingredients: `The primary ingredients in ${product.name} include: ${product.keyIngredients.join(", ")}.`,
      benefits: `The main benefits of using ${product.name} are: ${product.benefits.join(", ")}.`,
      sensitivity: `${product.name} contains ${product.keyIngredients.join(", ")}. ${product.sideEffects} For sensitive skin, we recommend testing on a small area first.`,
      "side-effects": `${product.sideEffects}`,
      contraindications: `Those with known allergies to ${product.keyIngredients[0]} or similar products should consult a dermatologist before use.`,
      "usage-instructions": `${product.howToUse}`,
      frequency: `Apply ${product.name} as per the instructions: ${product.howToUse}. Daily use is recommended for best results.`,
      compatibility: `${product.name} can be used with most skincare routines. Apply it in the morning or evening as part of your regular skincare regimen.`,
      pricing: `${product.name} is priced at ₹${product.price}.`,
      availability: `${product.name} is available through authorized retailers and online platforms.`,
      value: `At ₹${product.price}, ${product.name} offers excellent value for its concentration of ${product.concentration || "premium ingredients"}.`,
      "competitive-analysis": `${product.name} stands out with its ${product.concentration} formulation and focus on ${product.benefits[0]} benefits, making it competitive in its category.`,
      differentiation: `What makes ${product.name} unique is its specific blend of ${product.keyIngredients.slice(0, 2).join(" and ")}, combined with its suitability for ${product.skinType.join(" and ")} skin types.`,
      timeline: `Most users report seeing initial results from ${product.name} within 2-4 weeks of consistent use.`,
    }

    return (
      answers[keyword] ||
      `For more information about ${product.name}, please refer to the product documentation or consult a skincare professional.`
    )
  }

  private groupByCategory(faqs: FAQEntry[]): Record<string, FAQEntry[]> {
    return faqs.reduce(
      (acc, faq) => {
        if (!acc[faq.category]) {
          acc[faq.category] = []
        }
        acc[faq.category].push(faq)
        return acc
      },
      {} as Record<string, FAQEntry[]>,
    )
  }
}
