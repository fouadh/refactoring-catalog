// Example inspired from Martin Fowler, Refactoring Second Edition, p.120
// Also Inspired from this kata: https://github.com/sandromancuso/salaryslipkata

export class Employee {
  private readonly _annualGrossSalary: number

  constructor(annualGrossSalary: number) {
    this._annualGrossSalary = annualGrossSalary
  }

  get baseSalary() {
    return this._annualGrossSalary / 12
  }

  get nationalInsurance() {
    return Math.max(0, 0.12 * this.baseSalary - 80.6)
  }

  get taxableIncome() {
    return Math.max(0, 0.2 * this.baseSalary - 183.33)
  }

  get monthlySalary() {
    // base salary - national insurance contribution - taxable income
    return this.baseSalary - this.nationalInsurance - this.taxableIncome
  }
}
