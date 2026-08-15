import Container from '../ui/Container'
import './Footer.css'

const footerLinks = {
  Shop: [
    { label: 'All Products', href: '#shop' },
    { label: 'Herbal Wellness', href: '#categories' },
    { label: 'Skin Care', href: '#categories' },
    { label: 'Wellness Gifts', href: '#categories' },
  ],
  Discover: [
    { label: 'Our Story', href: '#about' },
    { label: 'Wellness Journal', href: '#journal' },
    { label: 'Ingredients', href: '#wellness' },
    { label: 'Sustainability', href: '#about' },
  ],
  Support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Shipping & Returns', href: '#shipping' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Track Order', href: '#track' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-leaf" aria-hidden="true">✦</span>
              <span className="footer__logo-text">
                <span className="footer__logo-brand">VELNIFY</span>
                <span className="footer__logo-sub">WELLSY</span>
              </span>
            </a>
            <p className="footer__tagline display-text">
              Natural wellness, thoughtfully made for your everyday rituals.
            </p>
            <div className="footer__social">
              <a href="#instagram" aria-label="Instagram">Instagram</a>
              <a href="#pinterest" aria-label="Pinterest">Pinterest</a>
              <a href="#facebook" aria-label="Facebook">Facebook</a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer__group">
              <h3 className="footer__group-title">{group}</h3>
              <ul className="footer__links">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} VELNIFY WELLSY. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
