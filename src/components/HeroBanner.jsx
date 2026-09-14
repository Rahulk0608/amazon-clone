import { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    title: 'Big Electronics Sale',
    subtitle: 'Up to 40% off on headphones, smartwatches & speakers',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
  },
  {
    id: 2,
    title: 'Refresh Your Wardrobe',
    subtitle: 'New season fashion arrivals starting at ₹499',
    image:
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&q=80',
  },
  {
    id: 3,
    title: 'Kitchen & Home Essentials',
    subtitle: 'Everything you need for a cozy home, all in one place',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1400&q=80',
  },
]

export default function HeroBanner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  function goTo(i) {
    setIndex((i + slides.length) % slides.length)
  }

  return (
    <section className="hero" aria-label="Offers carousel">
      <div
        className="hero-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-slide-inner">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="hero-arrow prev"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        type="button"
      >
        ‹
      </button>
      <button
        className="hero-arrow next"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        type="button"
      >
        ›
      </button>

      <div className="hero-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
