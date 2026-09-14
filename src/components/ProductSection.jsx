import { products, categories } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function ProductSection({ activeCategory }) {
  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  const categoryName = categories.find((c) => c.id === activeCategory)?.name

  return (
    <section className="section">
      <h2 className="section-heading">
        {activeCategory ? `${categoryName} picks for you` : 'Recommended for you'}
      </h2>
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
