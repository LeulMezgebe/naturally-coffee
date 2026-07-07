import { useEffect } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

const SECTION_BY_PATH = {
  '/': 'top',
  '/products': 'shop',
  '/about': 'about',
  '/contact': 'contact',
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const id = hash ? hash.slice(1) : SECTION_BY_PATH[pathname]
    if (!id || id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function Landing() {
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        {Object.keys(SECTION_BY_PATH).map((path) => (
          <Route key={path} path={path} element={<Landing />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
