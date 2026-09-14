# amazon. — Amazon Clone (React + Vite)

A front-end e-commerce clone built with React, Vite, and React Router.

## Structure

```
src/
  components/
    Navbar.jsx          Logo, search bar, account, cart (with live item count)
    HeroBanner.jsx       Auto-playing offers carousel
    CategorySection.jsx  Electronics / Fashion / Grocery / Home & Kitchen
    ProductCard.jsx       Single product card (image, price, add to cart)
    ProductSection.jsx    Grid of ProductCards, filterable by category
  pages/
    Home.jsx             Hero + Categories + Product grid
    ProductPage.jsx       Product detail: qty picker, Buy Now, Add to Cart
    CheckoutPage.jsx      Cart list + totals + checkout button + empty state
  context/
    CartContext.jsx       Global cart state (add/remove/update qty) via Context API
  data/
    products.js            Mock product + category data
```

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## How it works

- Clicking a category on the home page filters the product grid.
- Clicking a product image or title opens its detail page (`/product/:id`).
- "Add to Cart" adds the item without leaving the page; "Buy Now" adds it and
  jumps straight to checkout.
- The cart badge in the navbar updates live from `CartContext`.
- `/checkout` shows every cart line with quantity controls and a remove
  button, or — if the cart is empty — a "No items added to cart" message with
  a "Shop Now" button back to the homepage.
- Clicking "Checkout" clears the cart and shows an order-confirmation screen.

## Notes

- Product images are pulled from Unsplash at runtime, so an internet
  connection is needed to see them load.
- This is a static/local-state demo only — there's no backend, payments, or
  persistence (the cart resets on page refresh).
