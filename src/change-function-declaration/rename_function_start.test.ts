import { printEmployeeInfo } from './rename_function_start'

describe('Employee', () => {
  it('can log info', () => {
    console.log = jest.fn()

    printEmployeeInfo({
      id: '123',
      firstName: 'Jane',
      lastName: 'Doe',
    })

    expect(console.log).toHaveBeenCalledWith('id: 123')
    expect(console.log).toHaveBeenCalledWith('First Name: Jane')
    expect(console.log).toHaveBeenCalledWith('Last Name: Doe')
  })
})
