export type Employee = {
  annualGrossSalary: number
}

export function payEmployee(employee: Employee) {
  payAmount(employee)
  console.log('Employee got paid')
}

function payAmount(employee: Employee) {
  console.log(`Paying $${employee.annualGrossSalary / 12}`)
}
