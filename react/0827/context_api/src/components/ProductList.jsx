import React from "react";
import { useCart } from "../hooks/useCart";
export default function ProductList() {
  const products = [
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
  ];
  const { addToCart } = useCart();

  return (
    <div>
      <h2>상품 목록</h2>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ₩{product.price}
          <button value={product.name} onClick={() => addToCart(product)}>
            장바구니에 추가
          </button>
        </li>
      ))}
    </div>
  );
}
