import { Employee } from '../extract-variable/example2'
import { payEmployee } from './replace_parameter'

describe('Employee', () => {
  it('should be paid', () => {
    console.log = jest.fn()

    payEmployee({
      annualGrossSalary: 1200,
    })

    expect(console.log).toHaveBeenCalledWith('Paying $100')
    expect(console.log).toHaveBeenCalledWith('Employee got paid')
  })
})
