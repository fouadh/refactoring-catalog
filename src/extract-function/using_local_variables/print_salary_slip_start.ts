// Example inspired from Martin Fowler, Refactoring Second Edition, p.110
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
  lastPaymentDate?: Date
}

export function printSalarySlip(employee: Employee) {
  printBanner()

  // calculate monthly salary
  const salary = (employee.annualGrossSalary / 12).toFixed(2)

  // record when the salary will be paid
  const today = Clock.today
  employee.lastPaymentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 10
  )

  // print details
  console.log(`Employee ID: ${employee.id}`)
  console.log(`Employee Name: ${employee.name}`)
  console.log(`Gross Salary: £${salary}`)
  console.log(`Paid on: ${employee.lastPaymentDate?.toLocaleDateString()}`)
}

function printBanner() {
  console.log('*********************')
  console.log('**** Salary Slip ****')
  console.log('*********************')
}
