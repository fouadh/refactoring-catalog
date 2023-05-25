import { TaskScheduler, Priority } from './add_parameter'

describe('Task scheduler', () => {
  it('schedule tasks', () => {
    const scheduler = new TaskScheduler()
    const task1 = { id: 1 }
    const task2 = { id: 1 }
    const task3 = { id: 1 }

    scheduler.schedule(task1, Priority.Low)
    scheduler.schedule(task2, Priority.Low)
    scheduler.schedule(task3, Priority.Low)

    expect(scheduler.scheduled).toEqual([task1, task2, task3])
  })
})
