import { Todo, highPriority } from './example'

describe('Todo', () => {
  test('high priorities', () => {
    const todos = [
      new Todo('low', 'foo-1'),
      new Todo('high', 'foo-2'),
      new Todo('low', 'foo-3'),
      new Todo('urgent', 'foo-4'),
      new Todo('low', 'foo-5'),
    ]

    const got = highPriority(todos)

    expect(got).toEqual([
      new Todo('high', 'foo-2'),
      new Todo('urgent', 'foo-4'),
    ])
  })
})
