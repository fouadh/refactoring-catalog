// Example inspired from Martin Fowler, Refactoring Second Edition, p.120
// Also Inspired from this kata: https://github.com/sandromancuso/salaryslipkata

export function monthlySalary(annualGrossSalary: number) {
  // base salary - national insurance contribution - taxable income
  const baseSalary = annualGrossSalary / 12
  const nationalInsurance = Math.max(0, 0.12 * baseSalary - 80.6)
  const taxableIncome = Math.max(0, 0.2 * baseSalary - 183.33)
  return `£${(baseSalary - nationalInsurance - taxableIncome).toFixed(2)}`
}
