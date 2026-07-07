// Product catalog for Whop embedded checkout.
// TODO: replace every plan_XXXX placeholder with the real plan ids from
// Whop dashboard > Checkout links > (⋮) > Details.

export type PurchaseMode = 'oneTime' | 'subscription'

export interface ProductPlan {
  planId: string
  price: string
  label: string
}

export interface Product {
  id: string
  name: string
  origin: string
  notes: string
  tint: string
  plans: Record<PurchaseMode, ProductPlan>
}

export const RETURN_URL = 'https://naturallycoffee.org/thanks'

export const PRODUCTS: Product[] = [
  {
    id: 'ethiopian-medium',
    name: 'Ethiopian Medium Roast',
    origin: 'Single origin · Ethiopia',
    notes: 'Milk chocolate, stone fruit, and a soft honey finish. Comfortable in the morning, easy all day.',
    tint: 'tint-amber',
    plans: {
      oneTime: {
        planId: 'plan_XXXX_ETHIOPIAN_ONETIME',
        price: '$24',
        label: 'One-time',
      },
      subscription: {
        planId: 'plan_XXXX_ETHIOPIAN_SUB',
        price: '$19.99/mo',
        label: 'Subscribe & save 17%',
      },
    },
  },
  {
    id: 'high-lake-light',
    name: 'High Lake Light Roast',
    origin: 'Blend · Ethiopia, Colombia, Mexico',
    notes: 'Bright citrus and red berry up front, with a smooth cocoa finish. A light roast with real depth.',
    tint: 'tint-green',
    plans: {
      oneTime: {
        planId: 'plan_XXXX_HIGHLAKE_ONETIME',
        price: '$24',
        label: 'One-time',
      },
      subscription: {
        planId: 'plan_XXXX_HIGHLAKE_SUB',
        price: '$19.99/mo',
        label: 'Subscribe & save 17%',
      },
    },
  },
]
