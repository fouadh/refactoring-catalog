export class Todo {
  private _priority: string
  private _description: string

  constructor(priority: string, description: string) {
    this._priority = priority
    this._description = description
  }

  get priority(): string {
    return this._priority
  }

  set priority(priority: string) {
    this._priority = priority
  }

  get description() {
    return this._description
  }

  set description(description: string) {
    this._description = description
  }
}

export function highPriority(todos: Todo[]) {
  return todos.filter((o) => 'high' === o.priority || 'urgent' === o.priority)
}
