import {
  comparePowerConsumption,
  updatePowerConsumption,
  getAccounts,
} from './example'

describe('Power Consumption', () => {
  test('update', () => {
    updatePowerConsumption('123', '2023', '1', 500)
    expect(getAccounts().powerConsumption('123', '2023', '1')).toEqual(500)
  })

  test('comparison between the same month of two consecutive years', () => {
    const comparison = comparePowerConsumption('123', '2023', '2')
    expect(comparison).toEqual({
      laterAmount: 200,
      change: -2,
    })
  })
})
