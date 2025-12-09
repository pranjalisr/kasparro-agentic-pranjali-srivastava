// Core type definitions for the agentic system

export interface Product {
  name: string
  concentration?: string
  skinType: string[]
  keyIngredients: string[]
  benefits: string[]
  howToUse: string
  sideEffects: string
  price: number
  currency?: string
}

export interface Agent {
  name: string
  description: string
  responsibility: string
  execute(context: AgentContext): Promise<unknown>
}

export interface AgentContext {
  product: Product
  questionGenerator?: any // Placeholder for QuestionGeneratorBlock, replace with actual import or declaration
  contentBlocks?: Map<string, ContentLogicBlock>
  templates?: Map<string, Template>
}

export interface ContentLogicBlock {
  name: string
  description: string
  execute(data: unknown): string
}

export interface Template {
  name: string
  description: string
  fields: FieldDefinition[]
  rules: TemplateRule[]
  compose(blocks: Map<string, string>): Record<string, unknown>
}

export interface FieldDefinition {
  name: string
  type: string
  required: boolean
  description: string
}

export interface TemplateRule {
  field: string
  condition: (data: unknown) => boolean
  transform: (data: unknown) => unknown
}

export interface FAQ {
  question: string
  answer: string
  category: string
}

export interface ComparisonResult {
  productA: Product
  productB: Product
  attributes: ComparisonAttribute[]
}

export interface ComparisonAttribute {
  attribute: string
  productA: string
  productB: string
  comparison: string
}

export interface OrchestrationNode {
  id: string
  agentName: string
  dependsOn: string[]
  output?: unknown
}
