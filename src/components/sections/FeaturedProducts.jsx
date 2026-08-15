import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'
import Button from '../ui/Button'
import { featuredProducts } from '../../data/homeContent'
import './FeaturedProducts.css'

export default function FeaturedProducts() {
  return (
    <section className="featured" id="shop">
      <Container>
        <div className="featured__header">
          <SectionHeading
            eyebrow="Curated for You"
            displayTitle="Featured Products"
            description="Hand-selected herbal essentials loved by our community."
            align="left"
          />
          <Button variant="ghost" as="a" href="#shop-all" className="featured__view-all">
            View All →
          </Button>
        </div>
        <ul className="featured__grid">
          {featuredProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
