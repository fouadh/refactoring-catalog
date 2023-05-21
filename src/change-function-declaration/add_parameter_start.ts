export type Task = {
  id: number
}

export class TaskScheduler {
  private readonly _tasks: Task[] = []

  schedule(task: Task) {
    this._tasks.push(task)
  }

  get scheduled() {
    return this._tasks
  }
}
