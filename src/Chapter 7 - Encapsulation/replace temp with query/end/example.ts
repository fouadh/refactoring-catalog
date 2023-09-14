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

  get baseSalary() {
    return this._annualGrossSalary / 12
  }

  get taxableIncome() {
    var taxableIncome = 0
    if (this.baseSalary > 8600 / 12) taxableIncome = this.baseSalary * 0.2
    return taxableIncome
  }

  get salary() {
    return this.baseSalary - this.taxableIncome
  }
}
