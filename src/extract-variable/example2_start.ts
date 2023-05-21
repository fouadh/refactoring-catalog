// Example inspired from Martin Fowler, Refactoring Second Edition, p.120
// Also Inspired from this kata: https://github.com/sandromancuso/salaryslipkata

export class Employee {
  private readonly _annualGrossSalary: number

  constructor(annualGrossSalary: number) {
    this._annualGrossSalary = annualGrossSalary
  }

  get monthlySalary() {
    // base salary - national insurance contribution - taxable income
    return (
      this._annualGrossSalary / 12 -
      Math.max(0, (0.12 * this._annualGrossSalary) / 12 - 80.6) -
      Math.max(0, (0.2 * this._annualGrossSalary) / 12 - 183.33)
    )
  }
}
