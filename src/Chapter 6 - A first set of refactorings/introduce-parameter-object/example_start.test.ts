import { Repository, commitsBetween } from './example_start'

describe('Repository', () => {
  describe('retrieving commits', () => {
    let repository: Repository

    beforeEach(() => {
      repository = {
        name: 'refactoring-repo',
        commits: [
          { id: 'foo-1', date: new Date(2022, 9, 10) },
          { id: 'foo-2', date: new Date(2022, 9, 11) },
          { id: 'foo-3', date: new Date(2022, 10, 12) },
          { id: 'foo-4', date: new Date(2022, 10, 13) },
          { id: 'foo-5', date: new Date(2022, 11, 14) },
          { id: 'foo-6', date: new Date(2022, 11, 15) },
        ],
      }
    })

    test('date range outside of commit dates', () => {
      expect(
        commitsBetween(repository, new Date(2022, 8, 1), new Date(2022, 9, 9))
      ).toHaveLength(0)
      expect(
        commitsBetween(
          repository,
          new Date(2022, 11, 16),
          new Date(2022, 11, 20)
        )
      ).toHaveLength(0)
    })

    test('date range at the boundaries', () => {
      expect(
        commitsBetween(repository, new Date(2022, 9, 10), new Date(2022, 9, 10))
      ).toEqual([{ id: 'foo-1', date: new Date(2022, 9, 10) }])
      expect(
        commitsBetween(
          repository,
          new Date(2022, 11, 15),
          new Date(2022, 11, 15)
        )
      ).toEqual([{ id: 'foo-6', date: new Date(2022, 11, 15) }])
    })

    test('date range crossing boundaries', () => {
      expect(
        commitsBetween(repository, new Date(2022, 9, 9), new Date(2022, 9, 10))
      ).toEqual([{ id: 'foo-1', date: new Date(2022, 9, 10) }])
    })

    test('some basic date range queries', () => {
      expect(
        commitsBetween(
          repository,
          new Date(2022, 9, 11),
          new Date(2022, 10, 12)
        )
      ).toEqual([
        { id: 'foo-2', date: new Date(2022, 9, 11) },
        { id: 'foo-3', date: new Date(2022, 10, 12) },
      ])
    })

    test('date range encompassing all commits', () => {
      expect(
        commitsBetween(
          repository,
          new Date(2022, 9, 10),
          new Date(2022, 11, 15)
        )
      ).toEqual([
        { id: 'foo-1', date: new Date(2022, 9, 10) },
        { id: 'foo-2', date: new Date(2022, 9, 11) },
        { id: 'foo-3', date: new Date(2022, 10, 12) },
        { id: 'foo-4', date: new Date(2022, 10, 13) },
        { id: 'foo-5', date: new Date(2022, 11, 14) },
        { id: 'foo-6', date: new Date(2022, 11, 15) },
      ])
    })
  })
})
