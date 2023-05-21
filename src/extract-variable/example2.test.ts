import { Employee } from './example2'

describe('Salary', () => {
  it('of £5,000.00', () => {
    expect(new Employee(5000).monthlySalary.toFixed(2)).toBe('416.67')
  })

  it('of £9,060.00', () => {
    expect(new Employee(9060).monthlySalary.toFixed(2)).toBe('745.00')
  })

  it('of £12,000.00', () => {
    expect(new Employee(12000).monthlySalary.toFixed(2)).toBe('943.93')
  })
})
