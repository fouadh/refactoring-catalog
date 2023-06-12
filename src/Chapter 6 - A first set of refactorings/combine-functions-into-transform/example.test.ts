import { enrichEmployee } from './example'

describe('Employee', () => {
  test('base salary', () => {
    const anEmployee = {
      name: 'foo',
      annualGrossSalary: 1200,
    }
    const enrichedEmployee = enrichEmployee(anEmployee)
    expect(enrichedEmployee.baseSalary).toBe(100)
  })

  describe('taxable income', () => {
    test('when null', () => {
      const anEmployee = {
        name: 'foo',
        annualGrossSalary: 1200,
      }
      const enrichedEmployee = enrichEmployee(anEmployee)
      expect(enrichedEmployee.taxableIncome).toBe(0)
    })

    test('when non null', () => {
      const anEmployee = {
        name: 'foo',
        annualGrossSalary: 9600,
      }
      const enrichedEmployee = enrichEmployee(anEmployee)
      expect(enrichedEmployee.taxableIncome).toBe(160)
    })
  })
})
