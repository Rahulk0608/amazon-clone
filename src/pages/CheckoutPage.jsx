import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function CheckoutPage() {
  const { cartItems, removeFromCart, updateQty, totalItems, totalPrice, clearCart } =
    useCart()
  const navigate = useNavigate()
  const [orderPlaced, setOrderPlaced] = useState(false)

  if (orderPlaced) {
    return (
      <div className="checkout-order-success">
        <h2>Order placed! 🎉</h2>
        <p>Thanks for shopping with amazin. — a confirmation would normally be emailed to you.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Continue Shopping
        </button>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>No items added to cart</h2>
        <p>Looks like you haven't added anything yet. Let's fix that.</p>
        <button className="btn btn-accent" onClick={() => navigate('/')}>
          Shop Now
        </button>
      </div>
    )
  }

  function handleCheckout() {
    clearCart()
    setOrderPlaced(true)
  }

  return (
    <div className="checkout-page">
      <h2 className="section-heading">Your Cart ({totalItems} items)</h2>

      <div className="cart-list">
        {cartItems.map(({ product, qty }) => (
          <div className="cart-line" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
              <p className="cart-line-title">{product.title}</p>
              <div className="qty-control" style={{ display: 'inline-flex' }}>
                <button
                  type="button"
                  onClick={() => updateQty(product.id, qty - 1)}
                >
                  −
                </button>
                <span>{qty}</span>
                <button
                  type="button"
                  onClick={() => updateQty(product.id, qty + 1)}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className="cart-line-remove"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="cart-line-price">
              {formatPrice(product.price * qty)}
            </div>
          </div>
        ))}
      </div>

      <div className="checkout-summary">
        <div className="checkout-summary-row">
          <span>Items ({totalItems}):</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <div className="checkout-summary-row">
          <span>Delivery:</span>
          <span>Free</span>
        </div>
        <div className="checkout-summary-row checkout-summary-total">
          <span>Order Total:</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <button
          className="btn btn-accent btn-block"
          style={{ marginTop: 14 }}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}
