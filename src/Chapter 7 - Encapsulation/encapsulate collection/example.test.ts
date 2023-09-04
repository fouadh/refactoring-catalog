import {
  Catalog,
  Product,
  totalDigitalProducts,
  updateProducts,
  cleanupOutOfStockProduct,
} from './example'
import fs from 'fs'

describe('shop', () => {
  it('should return the number of digital products in the catalog', () => {
    const aCatalog = new Catalog()
    aCatalog.products = [
      new Product('foo-1', true),
      new Product('foo-2', false),
      new Product('foo-3', true),
    ]

    expect(totalDigitalProducts(aCatalog)).toBe(2)
  })

  it('should update the catalog from a file', () => {
    fs.readFileSync = jest.fn().mockReturnValue(`
      bar-1,false
      bar-2,true
      bar-3,false
    `)

    const aCatalog = new Catalog()
    aCatalog.products = [new Product('foo-1', true)]

    updateProducts('bar.csv', aCatalog)

    expect(aCatalog.products).toHaveLength(4)
    expect(aCatalog.products).toContainEqual(new Product('foo-1', true))
    expect(aCatalog.products).toContainEqual(new Product('bar-1', false))
    expect(aCatalog.products).toContainEqual(new Product('bar-2', true))
    expect(aCatalog.products).toContainEqual(new Product('bar-3', false))
  })

  it('should remove out of stock products', () => {
    const aCatalog = new Catalog()
    const outOfStockProduct = new Product('foo-2', false)
    aCatalog.products = [
      new Product('foo-1', true),
      outOfStockProduct,
      new Product('foo-3', true),
    ]

    cleanupOutOfStockProduct(outOfStockProduct, aCatalog)

    expect(aCatalog.products).toHaveLength(2)
    expect(aCatalog.products).toContainEqual(new Product('foo-1', true))
    expect(aCatalog.products).toContainEqual(new Product('foo-3', true))
  })
})
