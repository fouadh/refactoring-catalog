export type RawEmployee = {
  name: string
  annualGrossSalary: number
}

export class Employee {
  private readonly _name: string
  private readonly _annualGrossSalary: number

  constructor(data: RawEmployee) {
    this._name = data.name
    this._annualGrossSalary = data.annualGrossSalary
  }

  get name() {
    return this._name
  }

  get salary() {
    var baseSalary = this._annualGrossSalary / 12
    var taxableIncome = 0
    if (baseSalary > 8600 / 12) taxableIncome = baseSalary * 0.2
    return baseSalary - taxableIncome
  }
}
