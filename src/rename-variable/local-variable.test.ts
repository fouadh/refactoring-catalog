import { calculateSalary } from './local-variable'

describe('calculate salary', () => {
  test('for an annual salary of £5,000.00', () => {
    const salary = calculateSalary(5000)
    expect(salary.toFixed(2)).toBe('416.67')
  })

  test('for an annual salary of £9,060.00', () => {
    const salary = calculateSalary(9060)
    expect(salary.toFixed(2)).toBe('745.00')
  })
})
