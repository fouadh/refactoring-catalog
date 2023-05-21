import { sum } from "./example"

describe("sum", () => {
  it("should add numbers", () => {
    expect(sum(0, 0)).toBe(0)
    expect(sum(1, 0)).toBe(1)
    expect(sum(0, 1)).toBe(1)
    expect(sum(1, 1)).toBe(2)
    expect(sum(100, 11)).toBe(111)
  })
})