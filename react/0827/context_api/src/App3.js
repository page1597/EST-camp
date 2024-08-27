import React from "react";
import ProductList from "./components/ProductList";
import { Products } from "./contexts/Products";
import { useState } from "react";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";
import CartHeader from "./components/CartHeader";

export default function App3() {
  return (
    <CartProvider>
      <CartHeader />
      <main>
        <ProductList />
        <Cart />
      </main>
    </CartProvider>
  );
}
