import fs from 'fs'

export class Catalog {
  private _products: Product[]

  constructor() {
    this._products = []
  }

  get products() {
    return this._products.slice()
  }

  set products(products: Product[]) {
    this._products = products.slice()
  }

  addProduct(aProduct: Product) {
    this._products.push(aProduct)
  }

  removeProduct(aProduct: Product) {
    const index = this._products.indexOf(aProduct)
    if (index < 0) {
      throw new RangeError()
    }
    this._products.splice(index, 1)
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
    aCatalog.addProduct(new Product(raw.name, raw.isDigital))
  }
}

export function cleanupOutOfStockProduct(aProduct: Product, aCatalog: Catalog) {
  aCatalog.removeProduct(aProduct)
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
