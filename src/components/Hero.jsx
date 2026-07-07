import { Link } from 'react-router-dom'
import BeanIcon from './BeanIcon.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow fade-up">Ethically Sourced &middot; Small Batch</p>
          <h1 className="hero__title fade-up delay-1">
            Coffee the way nature intended.
          </h1>
          <p className="hero__tagline fade-up delay-2">
            Small-batch roasted beans sourced directly from farmers who care
            for the land as much as we care for the cup.
          </p>
          <div className="hero__actions fade-up delay-3">
            <Link to="/products" className="btn">
              Shop Now
            </Link>
            <Link to="/about" className="btn btn--ghost">
              Our Story
            </Link>
          </div>
          <ul className="hero__stats fade-up delay-4">
            <li>
              <strong>100%</strong>
              <span>Ethically sourced</span>
            </li>
            <li>
              <strong>12</strong>
              <span>Partner farms</span>
            </li>
            <li>
              <strong>48h</strong>
              <span>Roast to door</span>
            </li>
          </ul>
        </div>

        <div className="hero__visual fade-up delay-2" aria-hidden="true">
          <div className="hero__panel">
            <BeanIcon size={96} />
            <span className="hero__panel-label">
              Naturally
              <br />
              Coffee
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
