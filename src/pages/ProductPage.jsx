import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getProductById, formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = getProductById(id)
  const [qty, setQty] = useState(1)
  const [justAdded, setJustAdded] = useState(false)

  if (!product) {
    return (
      <div className="section">
        <h2 className="section-heading">Product not found</h2>
        <Link to="/" className="btn btn-outline">
          Back to home
        </Link>
      </div>
    )
  }

  const discount = Math.round(100 - (product.price / product.mrp) * 100)

  function handleAddToCart() {
    addToCart(product, qty)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  function handleBuyNow() {
    addToCart(product, qty)
    navigate('/checkout')
  }

  return (
    <>
      <p className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/">{product.category}</Link> /{' '}
        {product.title}
      </p>

      <div className="product-page">
        <div className="product-page-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-page-info">
          <h1>{product.title}</h1>
          <div className="product-rating">
            <strong>{product.rating.toFixed(1)} ★</strong> ({product.ratingCount}{' '}
            ratings)
          </div>

          <div className="product-page-price-block">
            <div className="product-price-row">
              <span className="product-price">{formatPrice(product.price)}</span>
              <span className="product-mrp">{formatPrice(product.mrp)}</span>
              <span className="product-discount">{discount}% off</span>
            </div>
          </div>

          <p
            className={`stock-line ${product.stock > 10 ? 'in' : 'low'}`}
          >
            {product.stock > 10
              ? 'In stock'
              : `Only ${product.stock} left in stock — order soon`}
          </p>

          <div className="qty-row">
            <span>Quantity:</span>
            <div className="qty-control">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span>{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
              >
                +
              </button>
            </div>
          </div>

          <div className="product-actions">
            <button className="btn btn-accent" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          {justAdded && (
            <p className="added-toast">Added to cart ✓</p>
          )}

          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </>
  )
}
