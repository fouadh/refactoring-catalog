class Address {
  private _street: string
  private _zipCode: string
  private _city: string
  private _country: string

  constructor(street: string, zipCode: string, city: string, country: string) {
    this._street = street
    this._zipCode = zipCode
    this._city = city
    this._country = country
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

  toString() {
    return `${this.street} ${this.zipCode} ${this.city} (${this.country})`
  }
}

export class Employee {
  private _name: string
  private _address: Address

  constructor(
    name: string,
    street: string,
    zipCode: string,
    city: string,
    country: string
  ) {
    this._name = name
    this._address = new Address(street, zipCode, city, country)
  }

  get name() {
    return this._name
  }

  set name(arg: string) {
    this._name = arg
  }

  get street() {
    return this._address.street
  }

  set street(arg: string) {
    this._address.street = arg
  }

  get zipCode() {
    return this._address.zipCode
  }

  set zipCode(arg: string) {
    this._address.zipCode = arg
  }

  get city() {
    return this._address.city
  }

  set city(arg: string) {
    this._address.city = arg
  }

  get country() {
    return this._address.country
  }

  set country(arg: string) {
    this._address.country = arg
  }

  get address() {
    return this._address.toString()
  }
}
