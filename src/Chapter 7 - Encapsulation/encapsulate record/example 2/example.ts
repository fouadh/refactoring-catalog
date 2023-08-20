import _ from 'lodash'

class Accounts {
  private readonly _data: RawAccounts

  constructor(data: RawAccounts) {
    this._data = data
  }

  powerConsumption(customerId: string, year: string, month: string) {
    return this._data[customerId].powerConsumption[year.toString()][month]
  }

  setPowerConsumption(
    customerId: string,
    year: string,
    month: string,
    newConsumption: PowerConsumption
  ) {
    this._data[customerId].powerConsumption[year][month] = newConsumption
  }
}

const rawAccounts: RawAccounts = {
  '123': {
    powerConsumption: {
      '2023': {
        '1': 100,
        '2': 200,
        '3': 300,
        // remaining months of the year
      },
      '2022': {
        '1': 101,
        '2': 202,
        '3': 303,
        // remaining months of the year
      },
    },
  },
  '456': {
    powerConsumption: {
      '2023': {
        '1': 10,
        '2': 20,
        '3': 30,
        // remaining months of the year
      },
    },
  },
}

const accounts = new Accounts(rawAccounts)

export function getAccounts() {
  return accounts
}

export function updatePowerConsumption(
  customerId: string,
  year: string,
  month: string,
  newConsumption: PowerConsumption
) {
  getAccounts().setPowerConsumption(customerId, year, month, newConsumption)
}

export function comparePowerConsumption(
  customerId: string,
  year: string,
  month: string
) {
  const later = getAccounts().powerConsumption(customerId, year, month)
  const earlier = getAccounts().powerConsumption(
    customerId,
    (parseInt(year) - 1).toString(),
    month
  )
  return { laterAmount: later, change: later - earlier }
}

type PowerConsumption = number

type RawYearConsumption = {
  [month: string]: PowerConsumption
}

type RawAccount = {
  powerConsumption: {
    [year: string]: RawYearConsumption
  }
}

type RawAccounts = {
  [id: string]: RawAccount
}
