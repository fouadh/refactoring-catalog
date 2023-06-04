export type Employee = {
  name: string
  annualGrossSalary: number
}

export function enrichEmployee(employee: Employee) {
  return {
    ...employee,
    baseSalary: baseSalary(employee),
    taxableIncome: taxableIncome(employee),
  }

  function baseSalary(employee: Employee) {
    return employee.annualGrossSalary / 12
  }

  function taxableIncome(employee: Employee) {
    const baseSalary = employee.annualGrossSalary / 12
    if (baseSalary > 8600 / 12) {
      return baseSalary * 0.2
    }
    return 0
  }
}
