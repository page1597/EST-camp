import React from "react";
import { useCart } from "../hooks/useCart";

export default function CartHeader() {
  const { getTotalCount } = useCart();
  return (
    <header>
      <h1>쇼핑몰</h1>
      <p>카트에 있는 상품의 개수: {getTotalCount()}</p>
    </header>
  );
}
