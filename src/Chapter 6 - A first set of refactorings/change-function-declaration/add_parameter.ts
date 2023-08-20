export type Task = {
  id: number
}

export enum Priority {
  Low,
  High
}

export class TaskScheduler {
  private readonly _tasks: Task[] = []

  schedule(task: Task, priority: Priority) {
    this._tasks.push(task)
  }

  get scheduled() {
    return this._tasks
  }
}
