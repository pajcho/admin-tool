export enum BookingStatusV2 {
  DRAFT = 'DRAFT',
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  CUSTOMER_ACCEPTED = 'CUSTOMER_ACCEPTED',
  ADMIN_REJECTED = 'ADMIN_REJECTED',
  UNAVAILABLE = 'UNAVAILABLE',
  CUSTOMER_REFUNDED = 'CUSTOMER_REFUNDED',

  // refunded automatically -> when you have approval process and trip is rejected by approver,
  REFUNDED_AUTOMATICALLY = 'REFUNDED_AUTOMATICALLY',
  COMPLETED_BY_AGENT = 'COMPLETED_BY_AGENT',

  // train booking statuses -- they are different from other booking statuses
  REQUEST = 'REQUEST',
  COMPLETION = 'COMPLETION',
  CANCELLATION = 'CANCELLATION',
  EXPIRATION = 'EXPIRATION',
  REBOOK = 'REBOOK',

  // Validation error received from be and mapped in booking status
  NOT_AVAILABLE_ANYMORE = 'NOT_AVAILABLE_ANYMORE',
  NON_EQUAL_CURRENCY_AS_CART = 'NON_EQUAL_CURRENCY_AS_CART',
  PRICE_UPDATED = 'PRICE_UPDATED',

  // Validation error received from be during payment, not mapped in booking status
  COST_CENTER_IS_MANDATORY = 'COST_CENTER_IS_MANDATORY',
  COST_CENTER_IS_NOT_VALID = 'COST_CENTER_IS_NOT_VALID',
}
