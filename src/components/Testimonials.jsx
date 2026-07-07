const TESTIMONIALS = [
  {
    quote:
      'The Golden Harvest is the smoothest cup I\u2019ve ever brewed at home. You can genuinely taste the difference fresh roasting makes.',
    name: 'Maya R.',
    detail: 'Subscriber for 2 years',
  },
  {
    quote:
      'I switched for the sustainability story and stayed for the flavor. Deep Forest is my daily driver — rich without being bitter.',
    name: 'James T.',
    detail: 'Home barista',
  },
  {
    quote:
      'Finally a decaf that doesn\u2019t taste like a compromise. Moonlight is what I hand to guests, and nobody ever guesses.',
    name: 'Priya S.',
    detail: 'Café owner, Portland',
  },
]

function Stars() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <p className="eyebrow">Kind Words</p>
        <h2 className="section__title">Loved by coffee people</h2>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="testimonial">
              <Stars />
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
