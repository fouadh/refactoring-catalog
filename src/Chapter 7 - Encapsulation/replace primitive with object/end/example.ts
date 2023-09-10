class Priority {
  private readonly _value: string

  constructor(value: string) {
    this._value = value
  }

  toString() {
    return this._value
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'urgent']
  }

  get _index() {
    return Priority.legalValues().findIndex((v) => v === this._value)
  }

  higherThan(aPriority: Priority) {
    return this._index > aPriority._index
  }
}

export class Todo {
  private _priority: Priority
  private _description: string

  constructor(priority: string, description: string) {
    this._priority = new Priority(priority)
    this._description = description
  }

  get priority(): Priority {
    return this._priority
  }

  set priorityString(priority: string) {
    this._priority = new Priority(priority)
  }

  get description() {
    return this._description
  }

  set description(description: string) {
    this._description = description
  }
}

export function highPriority(todos: Todo[]) {
  return todos.filter((o) => o.priority.higherThan(new Priority('normal')))
}
