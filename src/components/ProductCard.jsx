import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const discount = Math.round(100 - (product.price / product.mrp) * 100)

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: 'pointer' }}
      />
      <h3
        className="product-card-title"
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: 'pointer' }}
      >
        {product.title}
      </h3>
      <div className="product-rating">
        <strong>{product.rating.toFixed(1)} ★</strong> ({product.ratingCount})
      </div>
      <div className="product-price-row">
        <span className="product-price">{formatPrice(product.price)}</span>
        <span className="product-mrp">{formatPrice(product.mrp)}</span>
        <span className="product-discount">{discount}% off</span>
      </div>
      <button
        className="btn btn-primary btn-block"
        onClick={() => addToCart(product, 1)}
      >
        Add to Cart
      </button>
    </div>
  )
}
