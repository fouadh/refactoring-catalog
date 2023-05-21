import { TaskScheduler } from './add_parameter'

describe('Task scheduler', () => {
  it('schedule tasks', () => {
    const scheduler = new TaskScheduler()
    const task1 = { id: 1 }
    const task2 = { id: 1 }
    const task3 = { id: 1 }

    scheduler.schedule(task1, false)
    scheduler.schedule(task2, false)
    scheduler.schedule(task3, false)

    expect(scheduler.scheduled).toEqual([task1, task2, task3])
  })
})
