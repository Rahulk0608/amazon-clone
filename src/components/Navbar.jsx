import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { totalItems } = useCart()

  function handleSearch(e) {
    e.preventDefault()
    // Search is presentational in this clone — route back home.
    navigate('/')
  }

  return (
    <header className="navbar">
      <a className="nav-logo" href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>
        <span className="nav-logo-mark">amazon</span>
        <span className="nav-logo-dot">.</span>
      </a>

      <form className="nav-search" onSubmit={handleSearch}>
        <select aria-label="Search category">
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Grocery</option>
          <option>Home &amp; Kitchen</option>
        </select>
        <input
          type="text"
          placeholder="Search amazin.in"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          🔍
        </button>
      </form>

      <button className="nav-link" type="button">
        <span className="nav-link-label">Hello, sign in</span>
        <span className="nav-link-value">Account &amp; Lists</span>
      </button>

      <button className="nav-link" type="button">
        <span className="nav-link-label">Returns</span>
        <span className="nav-link-value">&amp; Orders</span>
      </button>

      <button
        className="nav-link nav-cart"
        type="button"
        onClick={() => navigate('/checkout')}
      >
        <span style={{ fontSize: '1.4rem', position: 'relative' }}>
          🛒
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </span>
        <span className="nav-link-value">Cart</span>
      </button>
    </header>
  )
}
