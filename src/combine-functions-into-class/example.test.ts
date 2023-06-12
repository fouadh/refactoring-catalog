import { Employee } from './example'

describe('Employee', () => {
  test('base salary', () => {
    const anEmployee = {
      name: 'foo',
      annualGrossSalary: 1200,
    }
    const salary = new Employee(anEmployee).baseSalary
    expect(salary).toBe(100)
  })

  describe('taxable income', () => {
    test('when null', () => {
      const anEmployee = {
        name: 'foo',
        annualGrossSalary: 1200,
      }
      const income = new Employee(anEmployee).taxableIncome
      expect(income).toBe(0)
    })

    test('when non null', () => {
      const anEmployee = {
        name: 'foo',
        annualGrossSalary: 9600,
      }
      const income = new Employee(anEmployee).taxableIncome
      expect(income).toBe(160)
    })
  })
})
