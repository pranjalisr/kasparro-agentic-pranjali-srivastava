// Base agent class with common functionality

import type { Agent, AgentContext } from "../types/index"

export abstract class BaseAgent implements Agent {
  abstract name: string
  abstract description: string
  abstract responsibility: string

  abstract execute(context: AgentContext): Promise<unknown>

  protected log(message: string): void {
    console.log(`[${this.name}] ${message}`)
  }

  protected logError(error: string): void {
    console.error(`[${this.name}] ERROR: ${error}`)
  }
}
