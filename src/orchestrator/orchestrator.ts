// Orchestrator: Coordinates agents in a DAG-based execution model

import type { Agent, OrchestrationNode, AgentContext, Product } from "../types/index"
import { FAQAgent } from "../agents/faq-agent"
import { ProductPageAgent } from "../agents/product-page-agent"
import { ComparisonAgent } from "../agents/comparison-agent"

export class Orchestrator {
  private agents: Map<string, Agent> = new Map()
  private nodes: OrchestrationNode[] = []
  private executionOrder: string[] = []

  constructor() {
    this.registerAgents()
    this.buildDAG()
  }

  private registerAgents(): void {
    const agents: Agent[] = [new FAQAgent(), new ProductPageAgent(), new ComparisonAgent()]

    agents.forEach((agent) => {
      this.agents.set(agent.name, agent)
      console.log(`[Orchestrator] Registered agent: ${agent.name}`)
    })
  }

  private buildDAG(): void {
    // Build directed acyclic graph for agent execution
    this.nodes = [
      {
        id: "faq",
        agentName: "FAQAgent",
        dependsOn: [],
        output: undefined,
      },
      {
        id: "product-page",
        agentName: "ProductPageAgent",
        dependsOn: [],
        output: undefined,
      },
      {
        id: "comparison",
        agentName: "ComparisonAgent",
        dependsOn: [],
        output: undefined,
      },
    ]

    // Determine execution order (topological sort)
    this.executionOrder = this.topologicalSort()
    console.log(`[Orchestrator] Execution order: ${this.executionOrder.join(" -> ")}`)
  }

  private topologicalSort(): string[] {
    const visited = new Set<string>()
    const stack: string[] = []

    const visit = (nodeId: string) => {
      visited.add(nodeId)
      const node = this.nodes.find((n) => n.id === nodeId)
      if (node) {
        node.dependsOn.forEach((dep) => {
          if (!visited.has(dep)) {
            visit(dep)
          }
        })
      }
      stack.push(nodeId)
    }

    this.nodes.forEach((node) => {
      if (!visited.has(node.id)) {
        visit(node.id)
      }
    })

    return stack
  }

  async orchestrate(product: Product): Promise<Map<string, unknown>> {
    console.log(`[Orchestrator] Starting orchestration with product: ${product.name}\n`)

    const context: AgentContext = {
      product,
    }

    const results = new Map<string, unknown>()

    for (const nodeId of this.executionOrder) {
      const node = this.nodes.find((n) => n.id === nodeId)
      if (!node) continue

      const agent = this.agents.get(node.agentName)
      if (!agent) {
        console.error(`[Orchestrator] Agent not found: ${node.agentName}`)
        continue
      }

      try {
        console.log(`[Orchestrator] Executing: ${node.agentName}`)
        const output = await agent.execute(context)
        node.output = output
        results.set(nodeId, output)
        console.log(`[Orchestrator] ✓ ${node.agentName} completed\n`)
      } catch (error) {
        console.error(`[Orchestrator] ✗ ${node.agentName} failed:`, error)
      }
    }

    return results
  }

  getExecutionGraph(): OrchestrationNode[] {
    return this.nodes
  }
}
