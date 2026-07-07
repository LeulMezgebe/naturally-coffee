import { useEffect, useState } from 'react'
import { WhopCheckoutEmbed } from '@whop/checkout/react'
import { RETURN_URL } from '../config/products.ts'
import BeanIcon from './BeanIcon.jsx'

const MODES = ['subscription', 'oneTime']

export default function ProductCard({ product }) {
  const [mode, setMode] = useState('subscription')
  const plan = product.plans[mode]

  // Remembered so the thanks page can pitch a subscription to
  // one-time buyers.
  useEffect(() => {
    try {
      localStorage.setItem('nc_last_mode', mode)
    } catch {
      // Storage unavailable (private browsing); nothing to do.
    }
  }, [mode])

  return (
    <article className="shop-card">
      <div className={`shop-card__visual ${product.tint}`} aria-hidden="true">
        <BeanIcon size={64} />
      </div>

      <div className="shop-card__body">
        <span className="shop-card__origin">{product.origin}</span>
        <h2>{product.name}</h2>
        <p className="shop-card__notes">{product.notes}</p>

        <div
          className="shop-card__toggle"
          role="group"
          aria-label={`Purchase options for ${product.name}`}
        >
          {MODES.map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={mode === m}
              className={mode === m ? 'is-active' : ''}
              onClick={() => setMode(m)}
            >
              <span>{product.plans[m].label}</span>
              <strong>{product.plans[m].price}</strong>
            </button>
          ))}
        </div>

        <div className="checkout-embed">
          <WhopCheckoutEmbed
            key={plan.planId}
            planId={plan.planId}
            returnUrl={RETURN_URL}
            theme="light"
            fallback={
              <p className="checkout-embed__loading">
                Loading secure checkout…
              </p>
            }
          />
        </div>
      </div>
    </article>
  )
}
