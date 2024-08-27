import React from "react";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { removeFromCart, cart } = useCart();

  return (
    <div>
      <h2>장바구니</h2>

      <button onClick={() => console.log(cart)}>보기</button>
      <ul>
        {cart.length !== 0 ? (
          cart.map((item) => (
            <li key={item.id}>
              {item.name} - 수량: {item.count}개
              <button onClick={() => removeFromCart(item.id)}>삭제</button>
            </li>
          ))
        ) : (
          <p>장바구니가 비었습니다.</p>
        )}
      </ul>
    </div>
  );
}
