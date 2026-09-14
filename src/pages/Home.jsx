import { useState } from 'react'
import HeroBanner from '../components/HeroBanner.jsx'
import CategorySection from '../components/CategorySection.jsx'
import ProductSection from '../components/ProductSection.jsx'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <>
      <HeroBanner />
      <CategorySection
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <ProductSection activeCategory={activeCategory} />
    </>
  )
}
