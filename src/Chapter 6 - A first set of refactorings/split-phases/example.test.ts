import { leasePayment } from './example'

describe('Leasing', () => {
  test('calculation', () => {
    const lease = {
      term: 36,
      moneyFactor: 0.00125,
    }

    const taxRate = 0.06

    expect(leasePayment(14500, 22500, lease, taxRate)).toBe(284.58)
  })
})
