import './ProductCard.css'

export default function ProductCard({ product }) {
  const { name, category, price, rating, badge, gradient } = product

  return (
    <article className="product-card">
      <a href={`#product-${product.id}`} className="product-card__link">
        <div className="product-card__image" style={{ background: gradient }}>
          {badge && <span className="product-card__badge">{badge}</span>}
          <button
            type="button"
            className="product-card__wishlist"
            aria-label={`Add ${name} to wishlist`}
            onClick={(e) => e.preventDefault()}
          >
            ♡
          </button>
          <div className="product-card__botanical" aria-hidden="true">
            <span>🌿</span>
          </div>
        </div>
        <div className="product-card__info">
          <span className="product-card__category">{category}</span>
          <h3 className="product-card__name">{name}</h3>
          <div className="product-card__meta">
            <span className="product-card__price">${price.toFixed(2)}</span>
            <span className="product-card__rating">★ {rating}</span>
          </div>
        </div>
      </a>
      <button type="button" className="product-card__add">
        Add to Cart
      </button>
    </article>
  )
}
