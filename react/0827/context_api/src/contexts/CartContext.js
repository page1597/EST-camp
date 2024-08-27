import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 카트의 상태
  const [cart, setCart] = useState([]);

  // 카트에 상품 추가하기
  const addToCart = (product) => {
    setCart((prevCart) => {
      // 카트에 이미 상품이 존재하는지 확인
      const isExist = prevCart.find((item) => item.id === product.id);

      // 존재하는 경우
      if (isExist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      // 상품이 카트에 처음 들어가는 경우
      return [...prevCart, { ...product, count: 1 }];
    });
  };

  // 카트에서 제거하기
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  // 카트 총 아이템 개수 반환
  const getTotalCount = () => {
    const totalCount = cart.reduce((acc, cur) => acc + cur.count, 0);
    return totalCount;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
