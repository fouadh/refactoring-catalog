// Example inspired from Martin Fowler, Refactoring Second Edition, p.117

export type Employee = {
  id: string
  name: string
}

export function employeeYaml(employee: Employee) {
  const lines: string[][] = []
  lines.push(['id', employee.id])
  lines.push(['name', employee.name])
  return lines.map((line) => line.join(': ')).join('\n')
}
