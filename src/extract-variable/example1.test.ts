import { monthlySalary } from './example1'

describe('Salary', () => {
  it('of £5,000.00', () => {
    expect(monthlySalary(5000)).toBe('£416.67')
  })

  it('of £9,060.00', () => {
    expect(monthlySalary(9060)).toBe('£745.00')
  })

  it('of £12,000.00', () => {
    expect(monthlySalary(12000)).toBe('£943.93')
  })
})
