import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { categories } from '../../data/homeContent'
import './Categories.css'

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <Container>
        <SectionHeading
          eyebrow="Browse by Category"
          displayTitle="Find Your Wellness Path"
          description="Explore our curated collections of herbal and natural products, each crafted to support a different aspect of your wellbeing."
        />
        <ul className="categories__grid">
          {categories.map((cat) => (
            <li key={cat.id}>
              <a href={`#${cat.id}`} className="categories__card">
                <span className="categories__icon" aria-hidden="true">
                  {cat.icon}
                </span>
                <h3 className="categories__name">{cat.name}</h3>
                <p className="categories__desc">{cat.description}</p>
                <span className="categories__link">Explore →</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
