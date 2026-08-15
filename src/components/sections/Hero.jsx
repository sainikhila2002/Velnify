import Container from '../ui/Container'
import Button from '../ui/Button'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Container className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Premium Herbal Wellness</span>
          <h1 className="hero__title">
            Natural Wellness.
            <br />
            <span className="display-text">Thoughtfully Made.</span>
          </h1>
          <p className="hero__description">
            Discover herbal and wellness products designed to bring balance to
            your everyday life.
          </p>
          <div className="hero__actions">
            <Button variant="primary" as="a" href="#shop">
              Shop Wellness
            </Button>
            <Button variant="secondary" as="a" href="#about">
              Explore Velnify
            </Button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__frame">
            <div className="hero__botanical-scene">
              <div className="hero__leaf hero__leaf--1">🌿</div>
              <div className="hero__leaf hero__leaf--2">🍃</div>
              <div className="hero__leaf hero__leaf--3">✿</div>
              <div className="hero__vessel">
                <div className="hero__vessel-neck" />
                <div className="hero__vessel-body" />
              </div>
            </div>
          </div>
          <div className="hero__accent-line" />
        </div>
      </Container>
    </section>
  )
}
