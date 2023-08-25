import fs from 'fs'

export class Catalog {
  private _products: Product[]

  constructor() {
    this._products = []
  }

  get products() {
    return this._products
  }

  set products(products: Product[]) {
    this._products = products
  }
}

export class Product {
  private readonly _name: string
  private readonly _isDigital: boolean

  constructor(name: string, isDigital: boolean) {
    this._name = name
    this._isDigital = isDigital
  }

  get isDigital() {
    return this._isDigital
  }
}

export function totalDigitalProducts(aCatalog: Catalog) {
  return aCatalog.products.filter((p) => p.isDigital).length
}

export function updateProducts(filename: string, aCatalog: Catalog) {
  for (const raw of readProducts(filename)) {
    aCatalog.products.push(new Product(raw.name, raw.isDigital))
  }
}

function readProducts(filename: string) {
  return fs
    .readFileSync(filename, 'utf-8')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line != '')
    .map((line) => line.split(','))
    .map((cols) => ({
      name: cols[0],
      isDigital: cols[1] == 'true' ? true : false,
    }))
}
