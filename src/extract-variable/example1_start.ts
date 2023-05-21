// Example inspired from Martin Fowler, Refactoring Second Edition, p.120
// Also Inspired from this kata: https://github.com/sandromancuso/salaryslipkata

export function monthlySalary(annualGrossSalary: number) {
  // base salary - national insurance contribution - taxable income
  return `£${(
    annualGrossSalary / 12 -
    Math.max(0, (0.12 * annualGrossSalary) / 12 - 80.6) -
    Math.max(0, (0.2 * annualGrossSalary) / 12 - 183.33)
  ).toFixed(2)}`
}
