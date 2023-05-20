// Example inspired from Martin Fowler, Refactoring Second Edition, p.117

export type Employee = {
  id: string
  name: string
}

export function employeeYaml(employee: Employee) {
  const lines: string[][] = []
  populateYaml(lines, employee)
  return lines.map((line) => line.join(': ')).join('\n')
}

function populateYaml(out: string[][], employee: Employee) {
  out.push(['id', employee.id])
  out.push(['name', employee.name])
}
