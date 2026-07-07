const VALUES = [
  {
    title: 'Direct trade, fair pay',
    text: 'We buy directly from 12 partner farms and pay 40% above fair-trade minimums, so quality is rewarded at the source.',
  },
  {
    title: 'Grown without compromise',
    text: 'Every bean is shade-grown under native canopy, free of synthetic pesticides and fertilizers.',
  },
  {
    title: 'Gentler on the planet',
    text: 'Compostable packaging, carbon-neutral shipping, and 1% of every order reinvested in reforestation projects.',
  },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        <div className="about__intro">
          <p className="eyebrow">Our Story</p>
          <h2 className="section__title">
            From soil to sip, done the right way.
          </h2>
          <p>
            Naturally Coffee started with a simple belief: great coffee
            shouldn&apos;t cost the earth. We travel to origin every harvest,
            build long-term relationships with growers, and roast each lot to
            highlight what makes it special — never to hide it.
          </p>
          <p>
            The result is coffee that tastes better because it&apos;s grown
            better. Good for farmers, good for forests, and very good in your
            cup.
          </p>
        </div>
        <ul className="about__values">
          {VALUES.map((value, index) => (
            <li key={value.title} className="about__value">
              <span className="about__value-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
