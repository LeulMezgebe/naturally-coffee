import BeanIcon from './BeanIcon.jsx'

const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1a6.7 6.7 0 100 13.4 6.7 6.7 0 000-13.4zm0 2.4a4.3 4.3 0 110 8.6 4.3 4.3 0 010-8.6zm6.9-2.9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z',
  },
  {
    name: 'X',
    href: 'https://x.com',
    path: 'M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.6 2H8l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    path: 'M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z',
  },
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="navbar__brand">
            <BeanIcon size={26} />
            <span>Naturally Coffee</span>
          </a>
          <p>
            Organic, ethically sourced coffee — roasted in small batches and
            shipped fresh to your door.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#top">Home</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:hello@naturallycoffee.com">
                hello@naturallycoffee.com
              </a>
            </li>
            <li><a href="tel:+15035550123">(503) 555-0123</a></li>
            <li>412 Roastery Lane, Portland, OR</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>
          &copy; {new Date().getFullYear()} Naturally Coffee. All rights
          reserved.
        </span>
      </div>
    </footer>
  )
}
