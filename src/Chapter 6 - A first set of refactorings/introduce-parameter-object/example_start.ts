export type Commit = {
  id: string
  date: Date
}

export type Repository = {
  name: string
  commits: Commit[]
}

export function commitsBetween(
  repository: Repository,
  minDate: Date,
  maxDate: Date
) {
  return repository.commits.filter(
    (commit) => commit.date >= minDate && commit.date <= maxDate
  )
}
