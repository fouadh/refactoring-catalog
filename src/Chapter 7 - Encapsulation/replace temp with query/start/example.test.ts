import { Employee } from './example'

describe('Employee', () => {
  it('should have no tax for small base salary', () => {
    const employee = new Employee({
      name: 'foo',
      annualGrossSalary: 1200,
    })
    const salary = employee.salary
    expect(salary).toBe(100)
  })

  it('should have tax deduced for big base salary', () => {
    const employee = new Employee({
      name: 'foo',
      annualGrossSalary: 9600,
    })
    const salary = employee.salary
    expect(salary).toBe(640)
  })
})
