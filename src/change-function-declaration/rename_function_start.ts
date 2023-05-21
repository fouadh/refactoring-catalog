type Employee = {
  id: string
  firstName: string
  lastName: string
}

export function printEmployeeInfo(employee: Employee) {
  print('id', employee.id)
  print('First Name', employee.firstName)
  print('Last Name', employee.lastName)
}

function print(name: string, value: string) {
  console.log(`${name}: ${value}`)
}
