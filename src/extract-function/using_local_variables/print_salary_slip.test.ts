import { printSalarySlip, Clock, Employee } from './print_salary_slip'

describe('Salary Slip', () => {
  beforeEach(() => {
    console.log = jest.fn()
    Clock.today = new Date('2023-12-12')
  })

  it('should print header', () => {
    printSalarySlip({
      id: 'not relevant',
      name: 'not relevant',
      annualGrossSalary: 0,
    })

    expect(console.log).toHaveBeenCalledWith('*********************')
    expect(console.log).toHaveBeenCalledWith('**** Salary Slip ****')
  })

  it('should print employee info', () => {
    printSalarySlip({
      id: '123',
      name: 'Jane Doe',
      annualGrossSalary: 0,
    })

    expect(console.log).toHaveBeenCalledWith('Employee ID: 123')
    expect(console.log).toHaveBeenCalledWith('Employee Name: Jane Doe')
    expect(console.log).toHaveBeenCalledWith('Paid on: 22/12/2023')
  })

  it('should record last payment date', () => {
    const employee: Employee = {
      id: 'not relevant',
      name: 'not relevant',
      annualGrossSalary: 0,
    }

    printSalarySlip(employee)

    expect(employee.lastPaymentDate?.toLocaleDateString()).toEqual('22/12/2023')
  })

  describe('monthly gross salary', () => {
    it('for an annual salary less than £8,000.00', () => {
      printSalarySlip({
        id: '123',
        name: 'Jane Doe',
        annualGrossSalary: 5000,
      })

      expect(console.log).toHaveBeenCalledWith('Gross Salary: £416.67')
    })
  })
})
