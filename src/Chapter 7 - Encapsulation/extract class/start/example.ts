export class Employee {
  private _name: string
  private _street: string
  private _zipCode: string
  private _city: string
  private _country: string

  constructor(
    name: string,
    street: string,
    zipCode: string,
    city: string,
    country: string
  ) {
    this._name = name
    this._street = street
    this._zipCode = zipCode
    this._city = city
    this._country = country
  }

  get name() {
    return this._name
  }

  set name(arg: string) {
    this._name = arg
  }

  get street() {
    return this._street
  }

  set street(arg: string) {
    this._street = arg
  }

  get zipCode() {
    return this._zipCode
  }

  set zipCode(arg: string) {
    this._zipCode = arg
  }

  get city() {
    return this._city
  }

  set city(arg: string) {
    this._city = arg
  }

  get country() {
    return this._country
  }

  set country(arg: string) {
    this._country = arg
  }

  get address() {
    return `${this.street} ${this.zipCode} ${this.city} (${this.country})`
  }
}
