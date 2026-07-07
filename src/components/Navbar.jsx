import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BeanIcon from './BeanIcon.jsx'

const LINKS = [
  { label: 'Shop', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main navigation">
        <Link to="/" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <BeanIcon size={26} />
          <span>Naturally Coffee</span>
        </Link>

        <button
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/products"
              className="btn btn--small"
              onClick={() => setMenuOpen(false)}
            >
              Shop Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
