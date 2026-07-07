import BeanIcon from './BeanIcon.jsx'

const PRODUCTS = [
  {
    name: 'Morning Meadow',
    roast: 'Light Roast',
    description:
      'Bright and floral with notes of honey, apricot, and jasmine. A gentle way to greet the day.',
    price: '$18',
    tint: 'tint-green',
  },
  {
    name: 'Golden Harvest',
    roast: 'Medium Roast',
    description:
      'Balanced and smooth with caramel sweetness, toasted almond, and a whisper of cocoa.',
    price: '$19',
    tint: 'tint-amber',
  },
  {
    name: 'Deep Forest',
    roast: 'Dark Roast',
    description:
      'Bold and velvety with dark chocolate, molasses, and a smoky, satisfying finish.',
    price: '$20',
    tint: 'tint-brown',
  },
  {
    name: 'Moonlight Decaf',
    roast: 'Swiss Water Decaf',
    description:
      'All the comfort, none of the caffeine. Notes of hazelnut, brown sugar, and vanilla.',
    price: '$21',
    tint: 'tint-dusk',
  },
]

export default function Products() {
  return (
    <section className="products section" id="shop">
      <div className="container">
        <p className="eyebrow">Featured Beans</p>
        <h2 className="section__title">Roasted this week</h2>
        <p className="section__lead">
          Every bag is roasted to order in small batches and shipped within 48
          hours, so it lands on your doorstep at peak flavor.
        </p>

        <div className="products__grid">
          {PRODUCTS.map((product) => (
            <article key={product.name} className="product-card">
              <div className={`product-card__visual ${product.tint}`}>
                <BeanIcon size={56} />
              </div>
              <div className="product-card__body">
                <span className="product-card__roast">{product.roast}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">
                    {product.price}
                    <small> / 12 oz</small>
                  </span>
                  <button type="button" className="btn btn--small">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
