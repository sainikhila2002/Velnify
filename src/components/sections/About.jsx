import Container from '../ui/Container'
import Button from '../ui/Button'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <Container className="about__inner">
        <div className="about__content">
          <span className="about__eyebrow">About Velnify Wellsy</span>
          <h2 className="about__title">
            Born from a Love of
            <span className="display-text"> Natural Healing</span>
          </h2>
          <p className="about__text">
            VELNIFY WELLSY was founded on a simple belief: that nature holds
            everything we need to feel balanced, nourished, and whole. What
            began as a personal journey into herbal wellness has grown into a
            curated collection of premium natural products — each one chosen
            with the same care we'd give our own families.
          </p>
          <p className="about__text">
            From the sun-drenched fields where our herbs are harvested to the
            moment our products arrive at your door, every step reflects our
            commitment to purity, sustainability, and the timeless wisdom of
            botanical healing.
          </p>
          <Button variant="primary" as="a" href="#our-story">
            Read Our Story
          </Button>
        </div>

        <div className="about__visual" aria-hidden="true">
          <div className="about__image-frame">
            <div className="about__texture">
              <div className="about__texture-leaf about__texture-leaf--1">🌿</div>
              <div className="about__texture-leaf about__texture-leaf--2">🍃</div>
              <div className="about__texture-leaf about__texture-leaf--3">✿</div>
            </div>
          </div>
          <div className="about__stat">
            <strong>50+</strong>
            <span>Botanical Ingredients</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
