import Container from '../ui/Container'
import Button from '../ui/Button'
import './Wellness.css'

const pillars = [
  {
    title: 'Botanical Integrity',
    text: 'We source only the finest herbs, roots, and botanicals — never diluted, never compromised.',
  },
  {
    title: 'Mindful Formulation',
    text: 'Each product is crafted in small batches with intention, honouring ancient wisdom and modern science.',
  },
  {
    title: 'Holistic Approach',
    text: 'Wellness is more than a product — it\'s a daily practice of nurturing body, mind, and spirit.',
  },
]

export default function Wellness() {
  return (
    <section className="wellness" id="wellness">
      <Container className="wellness__inner">
        <div className="wellness__visual" aria-hidden="true">
          <div className="wellness__circle">
            <span className="wellness__circle-icon">🌿</span>
          </div>
          <div className="wellness__ring wellness__ring--1" />
          <div className="wellness__ring wellness__ring--2" />
        </div>

        <div className="wellness__content">
          <span className="wellness__eyebrow">Our Philosophy</span>
          <h2 className="wellness__title display-text">
            Wellness Rooted in Nature
          </h2>
          <p className="wellness__intro">
            At VELNIFY WELLSY, we believe that true wellness begins with what
            nature provides. Every product in our collection is a testament to
            the healing power of plants — thoughtfully formulated to support
            your journey toward balance and vitality.
          </p>

          <ul className="wellness__pillars">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="wellness__pillar">
                <h3 className="wellness__pillar-title">{pillar.title}</h3>
                <p className="wellness__pillar-text">{pillar.text}</p>
              </li>
            ))}
          </ul>

          <Button variant="secondary" as="a" href="#wellness-guide">
            Explore Our Wellness Guide
          </Button>
        </div>
      </Container>
    </section>
  )
}
