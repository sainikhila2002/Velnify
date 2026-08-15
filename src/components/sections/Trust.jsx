import Container from '../ui/Container'
import { trustItems } from '../../data/homeContent'
import './Trust.css'

export default function Trust() {
  return (
    <section className="trust">
      <Container>
        <ul className="trust__grid">
          {trustItems.map((item) => (
            <li key={item.title} className="trust__item">
              <span className="trust__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="trust__title">{item.title}</h3>
              <p className="trust__text">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
