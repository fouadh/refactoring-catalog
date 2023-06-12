export type Commit = {
  id: string
  date: Date
}

export type Repository = {
  name: string
  commits: Commit[]
}

export class DateRange {
  private readonly _min: Date
  private readonly _max: Date

  constructor(min: Date, max: Date) {
    this._min = min
    this._max = max
  }

  get min() {
    return this._min
  }

  get max() {
    return this._max
  }

  contains(date: Date) {
    return date >= this._min && date <= this._max
  }
}

export function commitsBetween(repository: Repository, range: DateRange) {
  return repository.commits.filter((commit) => range.contains(commit.date))
}
