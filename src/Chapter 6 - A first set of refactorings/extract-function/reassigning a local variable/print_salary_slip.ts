// Example inspired from Martin Fowler, Refactoring Second Edition, p.112
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
  const salary = calculateSalary(employee)
  recordLastPaymentDate(employee)
  printDetails(employee, salary.toFixed(2))
}

function calculateSalary(employee: Employee) {
  let salary = employee.annualGrossSalary / 12
  if (employee.annualGrossSalary > 8060) {
    salary = salary - (0.12 * (employee.annualGrossSalary - 8060)) / 12
  }

  return salary
}

function recordLastPaymentDate(employee: Employee) {
  const today = Clock.today
  employee.lastPaymentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 10
  )
}

function printDetails(employee: Employee, salary: string) {
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
