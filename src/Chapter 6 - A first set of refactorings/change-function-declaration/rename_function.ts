type Employee = {
  id: string
  firstName: string
  lastName: string
}

export function logEmployee(employee: Employee) {
  log('id', employee.id)
  log('First Name', employee.firstName)
  log('Last Name', employee.lastName)
}

function log(name: string, value: string) {
  console.log(`${name}: ${value}`)
}
