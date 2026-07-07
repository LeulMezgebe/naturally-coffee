import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const PROMO_CODE = 'NATURALLY10'

export default function EmailPopup({ onClose }) {
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [copied, setCopied] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    dialog.querySelector('input, button')?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const focusables = dialog.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email.trim() || sending) return
    setSending(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      setDone(true)
    } catch {
      // Endpoint unreachable (e.g. plain vite dev) — still show the code
      // rather than dead-ending the visitor.
      setDone(true)
    } finally {
      setSending(false)
    }
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className="popup-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        ref={dialogRef}
      >
        <button
          type="button"
          className="popup__close"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>

        {done ? (
          <>
            <h2 id="popup-title">You&apos;re in</h2>
            <p>Use this code at checkout for 10% off your first bag.</p>
            <div className="popup__code">
              <code>{PROMO_CODE}</code>
              <button type="button" className="btn btn--small" onClick={copyCode}>
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <Link to="/products" className="popup__shop-link" onClick={onClose}>
              Shop coffee
            </Link>
          </>
        ) : (
          <>
            <h2 id="popup-title">Get 10% off your first bag</h2>
            <p>
              Leave your email and we&apos;ll send a little something for your
              first order.
            </p>
            <form className="popup__form" onSubmit={handleSubmit}>
              <label htmlFor="popup-email" className="visually-hidden">
                Email address
              </label>
              <input
                id="popup-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button type="submit" className="btn" disabled={sending}>
                {sending ? 'Sending…' : 'Send my code'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
