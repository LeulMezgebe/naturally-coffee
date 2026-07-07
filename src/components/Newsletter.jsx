import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="newsletter section">
      <div className="container newsletter__inner">
        <p className="eyebrow eyebrow--light">Stay in the Loop</p>
        <h2 className="section__title">Fresh beans, fresh news</h2>
        <p className="newsletter__lead">
          New roasts, brewing guides, and 10% off your first order. No spam —
          just coffee worth reading about.
        </p>
        {submitted ? (
          <p className="newsletter__success" role="status">
            Thanks! Check your inbox for your welcome discount.
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit" className="btn btn--cream">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
