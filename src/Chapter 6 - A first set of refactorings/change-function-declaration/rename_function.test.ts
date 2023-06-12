import { logEmployee } from './rename_function'

describe('Employee', () => {
  it('can log info', () => {
    console.log = jest.fn()

    logEmployee({
      id: '123',
      firstName: 'Jane',
      lastName: 'Doe',
    })

    expect(console.log).toHaveBeenCalledWith('id: 123')
    expect(console.log).toHaveBeenCalledWith('First Name: Jane')
    expect(console.log).toHaveBeenCalledWith('Last Name: Doe')
  })
})
