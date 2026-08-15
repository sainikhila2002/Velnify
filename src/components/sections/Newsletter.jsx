import { useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="newsletter">
      <Container>
        <div className="newsletter__card">
          <div className="newsletter__content">
            <span className="newsletter__eyebrow">Stay Connected</span>
            <h2 className="newsletter__title display-text">
              Join Our Wellness Circle
            </h2>
            <p className="newsletter__text">
              Receive curated wellness tips, new product announcements, and
              exclusive offers — delivered gently to your inbox.
            </p>
          </div>
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter__input"
            />
            <Button variant="gold" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
