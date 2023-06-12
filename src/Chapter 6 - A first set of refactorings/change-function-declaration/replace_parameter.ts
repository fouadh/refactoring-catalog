export type Employee = {
  annualGrossSalary: number
}

export function payEmployee(employee: Employee) {
  payAmount(employee.annualGrossSalary / 12)
  console.log('Employee got paid')
}

function payAmount(amount: number) {
  console.log(`Paying $${amount}`)
}
