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

  get annualGrossSalary() {
    return this._annualGrossSalary
  }

  get baseSalary() {
    return this.annualGrossSalary / 12
  }

  get taxableIncome() {
    const baseSalary = this.baseSalary
    if (baseSalary > 8600 / 12) {
      return baseSalary * 0.2
    }
    return 0
  }
}
