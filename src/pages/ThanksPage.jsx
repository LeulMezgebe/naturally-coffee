import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function readLastMode() {
  try {
    return localStorage.getItem('nc_last_mode')
  } catch {
    return null
  }
}

export default function ThanksPage() {
  const [searchParams] = useSearchParams()
  const status = searchParams.get('status')
  const boughtOneTime = readLastMode() === 'oneTime'

  return (
    <>
      <Navbar />
      <main className="thanks-page section">
        <div className="container thanks-page__inner">
          {status === 'error' ? (
            <>
              <p className="eyebrow">Checkout</p>
              <h1 className="section__title">That didn&apos;t go through</h1>
              <p className="section__lead">
                Your payment didn&apos;t complete — it happens. No charge was
                made, and your beans are still waiting.
              </p>
              <Link to="/products" className="btn">
                Try again
              </Link>
            </>
          ) : (
            <>
              <p className="eyebrow">Order confirmed</p>
              <h1 className="section__title">Your coffee is being roasted</h1>
              <p className="section__lead">
                Thanks for your order. We roast to order in small batches, so
                your bag ships within 48 hours. A receipt is on its way to
                your inbox.
              </p>
              {boughtOneTime && (
                <div className="thanks-page__pitch">
                  <h2>Like it? Put it on repeat.</h2>
                  <p>
                    Subscribers get the same fresh roast for $19.99 a month —
                    that&apos;s 17% off — and can pause or cancel anytime.
                  </p>
                  <Link to="/products" className="btn btn--ghost">
                    Set up a subscription
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
