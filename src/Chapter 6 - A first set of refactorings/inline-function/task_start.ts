// Example inspired from Martin Fowler, Refactoring Second Edition, p.116
export type Task = {
  deadline: number
}

export class Notifier {
  static notify(message: string) {
    console.log('dummy notifier')
  }
}

export function priority(task: Task) {
  return deadlineInLessThanFiveDays(task) ? 'high' : 'low'
}

export function sendDeadlineStatus(task: Task) {
  if (deadlineInLessThanFiveDays(task)) {
    Notifier.notify('deadline is close!')
  } else {
    Notifier.notify('we still have time!')
  }
}

function deadlineInLessThanFiveDays(task: Task) {
  return task.deadline < 5
}
