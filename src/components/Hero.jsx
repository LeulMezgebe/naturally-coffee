import BeanIcon from './BeanIcon.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow fade-up">Organic &middot; Ethically Sourced</p>
          <h1 className="hero__title fade-up delay-1">
            Coffee the way
            <br />
            nature intended.
          </h1>
          <p className="hero__tagline fade-up delay-2">
            Small-batch roasted, organic beans sourced directly from farmers
            who care for the land as much as we care for the cup.
          </p>
          <div className="hero__actions fade-up delay-3">
            <a href="#shop" className="btn">
              Shop Now
            </a>
            <a href="#about" className="btn btn--ghost">
              Our Story
            </a>
          </div>
          <ul className="hero__stats fade-up delay-4">
            <li>
              <strong>100%</strong>
              <span>Certified organic</span>
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

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__circle">
            <div className="hero__cup">
              <div className="hero__steam">
                <span />
                <span />
                <span />
              </div>
              <BeanIcon size={72} />
            </div>
          </div>
          <div className="hero__bean hero__bean--1">
            <BeanIcon size={34} />
          </div>
          <div className="hero__bean hero__bean--2">
            <BeanIcon size={24} />
          </div>
          <div className="hero__bean hero__bean--3">
            <BeanIcon size={44} />
          </div>
        </div>
      </div>
    </section>
  )
}
