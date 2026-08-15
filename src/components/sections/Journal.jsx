import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { journalPosts } from '../../data/homeContent'
import './Journal.css'

export default function Journal() {
  return (
    <section className="journal" id="journal">
      <Container>
        <div className="journal__header">
          <SectionHeading
            eyebrow="Wellness Journal"
            displayTitle="Stories & Rituals"
            description="Insights, guides, and inspiration for your wellness journey."
            align="left"
          />
          <Button variant="ghost" as="a" href="#journal-all">
            Read All →
          </Button>
        </div>

        <ul className="journal__grid">
          {journalPosts.map((post) => (
            <li key={post.id}>
              <article className="journal__card">
                <a href={`#journal-${post.id}`} className="journal__card-link">
                  <div className="journal__card-image" aria-hidden="true">
                    <span className="journal__card-icon">📖</span>
                  </div>
                  <div className="journal__card-body">
                    <span className="journal__card-category">{post.category}</span>
                    <h3 className="journal__card-title">{post.title}</h3>
                    <p className="journal__card-excerpt">{post.excerpt}</p>
                    <div className="journal__card-meta">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
