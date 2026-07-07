import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
