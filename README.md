# Agentic Content Generation System

A production-grade modular system for autonomously generating structured content across multiple page types using specialized AI agents and reusable content logic blocks.

## Overview

This system demonstrates enterprise-level agentic automation with clear agent boundaries, reusable logic components, and a template-driven architecture. It generates three distinct page types (FAQ, Product Page, and Comparison) from a single product data source using independent agents coordinated by a DAG-based orchestrator.

## Key Features

- **Multi-Agent Architecture**: Specialized agents (FAQ, ProductPage, Comparison) handle different content generation tasks
- **Reusable Content Blocks**: 7 modular logic blocks (Benefits, Ingredients, Usage, Safety, Pricing, Header, Comparison) that compose into final pages
- **Template Engine**: Declarative templates define page structure, field composition, and content rules
- **DAG Orchestration**: Topological sort ensures correct execution order with support for parallel agent execution
- **Machine-Readable Output**: All content generated as structured JSON for downstream processing
- **Extensible Design**: Add new agents or blocks without modifying existing code
- **Type-Safe**: Full TypeScript support with comprehensive type definitions


### Execution Flow

1. **Initialization**: Orchestrator loads all agents and builds DAG
2. **Orchestration**: Topological sort determines execution order
3. **Execution**: Agents run (in parallel when possible) using shared orchestration context
4. **Output**: Results written to JSON files (faq.json, product_page.json, comparison_page.json)

### Agent Types

- **FAQ Agent**: Generates 15+ categorized questions with structured answers
- **ProductPage Agent**: Creates comprehensive product marketing page
- **Comparison Agent**: Builds side-by-side comparison of two products

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup


# Install dependencies
npm install

# Build TypeScript (optional, for type checking)
npm run build


## Usage

### Run the System


# Development mode (with auto-reload)
npm run dev

# Production build and run
npm run build
npm start


### Output Files

After running, the system generates three JSON files in the project root:

- `faq.json` - FAQ page with categorized questions and answers
- `product_page.json` - Product marketing page with structured content
- `comparison_page.json` - Product comparison with side-by-side analysis

### Web Interface

Access the results via the web UI at `http://localhost:3000`:
- View all three generated JSON outputs
- Syntax-highlighted display
- One-click copy functionality

## Adding New Agents

1. Create a new file in `src/agents/` extending `BaseAgent`
2. Implement the `execute()` method
3. Register with orchestrator in `src/orchestrator/orchestrator.ts`
4. Define corresponding template in `src/templates/template-definitions.ts`

Example:

typescript
export class MyCustomAgent extends BaseAgent {
  async execute(context: OrchestrationContext) {
    // Your agent logic
  }
}


## Adding New Content Blocks

1. Create a new function in `src/blocks/content-logic-blocks.ts`
2. Follow the pattern: `(product: ProductModel) => string`
3. Use in templates via the `blocks` array

## Configuration

### Product Data

Edit `src/agents/comparison-agent.ts` to modify product data:

typescript
const productA = {
  name: "Your Product",
  benefits: ["Benefit 1", "Benefit 2"],
  // ... other properties
};


### Templates

Modify templates in `src/templates/template-definitions.ts` to change page structure and content rules.

## Technology Stack

- **TypeScript**: Type-safe implementation
- **Next.js 16**: React framework with API routes
- **Node.js**: Backend execution
- **JSON**: Structured output format


## How It Works

### 1. Content Logic Blocks

Transform product data into structured content:

typescript
// Input: ProductModel
// Output: string (formatted content)
const generateBenefits = (product) => {
  return product.benefits.map((b) => `• ${b}`).join("\n");
};


### 2. Templates

Define page structure and composition rules:

typescript
{
  name: "FAQ Template",
  fields: ["Title", "Questions", "Answers"],
  rules: ["No more than 15 questions", "Include safety info"],
  composition: [benefitsBlock, usageBlock, safetyBlock]
}


### 3. Agents

Execute templates to generate final content:

typescript
class FAQAgent extends BaseAgent {
  async execute(context) {
    return this.template.compose(this.product, context);
  }
}


### 4. Orchestrator

Coordinates agents using DAG execution:

typescript
orchestrator.addAgent("faq", faqAgent);
orchestrator.addAgent("product", productAgent);
const results = await orchestrator.execute();


## Extending the System

### Add a New Page Type

1. Create `src/agents/my-agent.ts`
2. Create corresponding template in `src/templates/template-definitions.ts`
3. Register in `src/orchestrator/orchestrator.ts`
4. Update `src/index.ts` to run the new agent

### Add a New Content Block

1. Add function to `src/blocks/content-logic-blocks.ts`
2. Reference in template `composition` array
3. Template engine automatically uses it during composition

### Modify Execution Logic

Edit `src/orchestrator/orchestrator.ts` to change how agents are coordinated (e.g., add dependencies between agents, implement custom execution strategies).

## API

### Orchestrator

typescript
const orchestrator = new Orchestrator();
orchestrator.addAgent(name: string, agent: BaseAgent);
orchestrator.addDependency(dependentAgent: string, prerequisiteAgent: string);
const results = await orchestrator.execute();


### Template Engine

typescript
const engine = new TemplateEngine();
const output = await engine.compose(template, product, context);


### Base Agent

typescript
class MyAgent extends BaseAgent {
  async execute(context: OrchestrationContext): Promise<object>
}


## Troubleshooting

**Build Error**: Run `npm run build` to check for TypeScript errors

**Missing Dependencies**: Run `npm install` to ensure all packages are installed

**Port Already in Use**: The app runs on port 3000 by default. Change the port by setting the `PORT` environment variable

**No Output Files**: Check console for errors. Ensure product data is properly configured in agents.

## License

MIT

## Support

For issues or questions, review the code comments in `src/` directory for detailed documentation of each component.
