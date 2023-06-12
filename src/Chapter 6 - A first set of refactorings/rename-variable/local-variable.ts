export function calculateSalary(annualGrossSalary: number) {
  let result = annualGrossSalary / 12
  if (annualGrossSalary > 8060) {
    result = result - (0.12 * (annualGrossSalary - 8060)) / 12
  }

  return result
}
