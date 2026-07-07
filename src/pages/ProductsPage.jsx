import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS } from '../config/products.ts'

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="shop-page section">
        <div className="container">
          <p className="eyebrow">Shop</p>
          <h1 className="section__title">Fresh-roasted coffee</h1>
          <p className="section__lead">
            Roasted in small batches and shipped within 48 hours. Pick a bag,
            or subscribe and never run out.
          </p>

          <div className="shop-grid">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
