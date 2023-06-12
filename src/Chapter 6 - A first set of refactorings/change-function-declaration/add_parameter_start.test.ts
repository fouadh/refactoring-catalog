import { TaskScheduler } from './add_parameter_start'

describe('Task scheduler', () => {
  it('schedule tasks', () => {
    const scheduler = new TaskScheduler()
    const task1 = { id: 1 }
    const task2 = { id: 1 }
    const task3 = { id: 1 }

    scheduler.schedule(task1)
    scheduler.schedule(task2)
    scheduler.schedule(task3)

    expect(scheduler.scheduled).toEqual([task1, task2, task3])
  })
})
