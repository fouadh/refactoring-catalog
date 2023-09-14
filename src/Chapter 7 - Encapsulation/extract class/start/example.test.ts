import { Employee } from './example'

describe('Employee', () => {
  it('should stringify its properties', () => {
    const employee = new Employee(
      'John Doe',
      '10 rue des acacias',
      '75001',
      'Paris',
      'France'
    )
    expect(employee.address).toBe('10 rue des acacias 75001 Paris (France)')
  })
})
