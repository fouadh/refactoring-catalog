import { baseSalary, taxableIncome } from './example_start'

describe('Employee', () => {
  test('base salary', () => {
    const anEmployee = {
      name: 'foo',
      annualGrossSalary: 1200,
    }
    const salary = baseSalary(anEmployee)
    expect(salary).toBe(100)
  })

  describe('taxable income', () => {
    test('when null', () => {
      const anEmployee = {
        name: 'foo',
        annualGrossSalary: 1200,
      }
      const income = taxableIncome(anEmployee)
      expect(income).toBe(0)
    })

    test('when non null', () => {
      const anEmployee = {
        name: 'foo',
        annualGrossSalary: 9600,
      }
      const income = taxableIncome(anEmployee)
      expect(income).toBe(160)
    })
  })
})
