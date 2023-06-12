import { Notifier, priority, sendDeadlineStatus } from './task'

describe('Task', () => {
  it('categorizes high priority tasks', () => {
    const task = {
      deadline: 1,
    }
    expect(
      priority({
        deadline: 1,
      })
    ).toBe('high')
    expect(
      priority({
        deadline: 4,
      })
    ).toBe('high')
  })

  it('categorizes high priority tasks', () => {
    expect(
      priority({
        deadline: 5,
      })
    ).toBe('low')
    expect(
      priority({
        deadline: 6,
      })
    ).toBe('low')
  })

  describe('notifications', () => {
    beforeEach(() => {
      Notifier.notify = jest.fn()
    })

    it('for high priority tasks', () => {
      sendDeadlineStatus({ deadline: 1 })
      expect(Notifier.notify).toHaveBeenCalledWith('deadline is close!')
    })

    it('for low priority tasks', () => {
      sendDeadlineStatus({ deadline: 5 })
      expect(Notifier.notify).toHaveBeenCalledWith('we still have time!')
    })
  })
})
