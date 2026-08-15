import { useState } from 'react'
import Container from '../ui/Container'
import { IconSearch, IconUser, IconHeart, IconBag } from '../ui/Icons'
import './Header.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Categories', href: '#categories' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
]

const iconActions = [
  { label: 'Search', href: '#search', Icon: IconSearch },
  { label: 'Account', href: '#account', Icon: IconUser },
  { label: 'Wishlist', href: '#wishlist', Icon: IconHeart },
  { label: 'Cart', href: '#cart', Icon: IconBag },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <Container className="header__inner">
        <a href="#home" className="header__logo" aria-label="VELNIFY WELLSY home">
          <span className="header__logo-leaf" aria-hidden="true">✦</span>
          <span className="header__logo-text">
            <span className="header__logo-brand">VELNIFY</span>
            <span className="header__logo-sub">WELLSY</span>
          </span>
        </a>

        <nav
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          {iconActions.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              className="header__icon-btn"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="header__menu-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </Container>
    </header>
  )
}
