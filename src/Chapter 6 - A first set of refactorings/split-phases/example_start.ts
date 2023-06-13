export type Lease = {
  term: number
  moneyFactor: number
}

export function leasePayment(
  residualValue: number,
  adjustedCapitalizedCost: number,
  lease: Lease,
  taxRate: number
) {
  // calculate lease payment data
  const monthlyDepreciation =
    (adjustedCapitalizedCost - residualValue) / lease.term
  const monthlyRentCharge =
    (adjustedCapitalizedCost + residualValue) * lease.moneyFactor

  // apply tax
  const monthlyTax = (monthlyDepreciation + monthlyRentCharge) * taxRate
  const monthlyLeasePayment =
    monthlyDepreciation + monthlyRentCharge + monthlyTax
  return Math.round(monthlyLeasePayment * 100) / 100
}
