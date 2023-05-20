import { employeeYaml } from './employee'

describe('Employee', () => {
  it('should build yaml', () => {
    const yaml = employeeYaml({ id: '123', name: 'Jane Doe' })
    expect(yaml).toBe('id: 123\nname: Jane Doe')
  })
})
