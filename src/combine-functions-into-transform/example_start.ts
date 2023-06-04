export type Employee = {
  name: string
  annualGrossSalary: number
}

export function baseSalary(employee: Employee) {
  return employee.annualGrossSalary / 12
}

export function taxableIncome(employee: Employee) {
  const baseSalary = employee.annualGrossSalary / 12
  if (baseSalary > 8600 / 12) {
    return baseSalary * 0.2
  }
  return 0
}
