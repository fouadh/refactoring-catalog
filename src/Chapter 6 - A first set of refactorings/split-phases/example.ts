export type Lease = {
  term: number
  moneyFactor: number
}

type LeasePaymentData = {
  monthlyDepreciation: number
  monthlyRentCharge: number
}

function applyTax(leasePaymentData: LeasePaymentData, taxRate: number) {
  const monthlyTax =
    (leasePaymentData.monthlyDepreciation +
      leasePaymentData.monthlyRentCharge) *
    taxRate
  const monthlyLeasePayment =
    leasePaymentData.monthlyDepreciation +
    leasePaymentData.monthlyRentCharge +
    monthlyTax
  return Math.round(monthlyLeasePayment * 100) / 100
}

function calculateLeasePaymentData(
  residualValue: number,
  adjustedCapitalizedCost: number,
  lease: Lease
) {
  const monthlyDepreciation =
    (adjustedCapitalizedCost - residualValue) / lease.term
  const monthlyRentCharge =
    (adjustedCapitalizedCost + residualValue) * lease.moneyFactor

  return {
    monthlyDepreciation,
    monthlyRentCharge,
  }
}

export function leasePayment(
  residualValue: number,
  adjustedCapitalizedCost: number,
  lease: Lease,
  taxRate: number
) {
  const leasePaymentData = calculateLeasePaymentData(
    residualValue,
    adjustedCapitalizedCost,
    lease
  )
  return applyTax(leasePaymentData, taxRate)
}
