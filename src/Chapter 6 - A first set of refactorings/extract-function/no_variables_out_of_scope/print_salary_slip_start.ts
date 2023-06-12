// Example inspired from Martin Fowler, Refactoring Second Edition, p.109
// Also Inspired from this kata: https://github.com/sandromancuso/salaryslipkata
export class Clock {
  private static now: Date

  static get today() {
    return Clock.now || new Date()
  }

  static set today(date: Date) {
    Clock.now = date
  }
}

export type Employee = {
  id: string
  name: string
  annualGrossSalary: number
  payAt?: Date
}

export function printSalarySlip(employee: Employee) {
  // print banner
  console.log('*********************')
  console.log('**** Salary Slip ****')
  console.log('*********************')

  // calculate monthly salary
  const salary = (employee.annualGrossSalary / 12).toFixed(2)

  // record when the salary will be paid
  const today = Clock.today
  employee.payAt = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 10
  )

  // print details
  console.log(`Employee ID: ${employee.id}`)
  console.log(`Employee Name: ${employee.name}`)
  console.log(`Gross Salary: £${salary}`)
  console.log(`Paid on: ${employee.payAt.toLocaleDateString()}`)
}
