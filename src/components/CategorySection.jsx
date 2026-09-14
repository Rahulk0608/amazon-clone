import { categories } from '../data/products.js'

export default function CategorySection({ onSelectCategory, activeCategory }) {
  return (
    <section className="section">
      <h2 className="section-heading">Shop by category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() =>
              onSelectCategory(activeCategory === cat.id ? null : cat.id)
            }
            role="button"
            tabIndex={0}
          >
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <span>
              {activeCategory === cat.id ? 'Showing this category' : 'Shop now'}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
