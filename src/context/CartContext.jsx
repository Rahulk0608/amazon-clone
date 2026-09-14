import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  // cartItems: [{ product, qty }]
  const [cartItems, setCartItems] = useState([])

  function addToCart(product, qty = 1) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + qty }
            : item
        )
      }
      return [...prev, { product, qty }]
    })
  }

  function removeFromCart(productId) {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  function updateQty(productId, qty) {
    if (qty < 1) return
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, qty } : item
      )
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty, 0),
    [cartItems]
  )

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty * item.product.price, 0),
    [cartItems]
  )

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
