import { createContext, useContext, useState } from "react";
import { CartItem, ContextProps } from "../types/common";

const CartContext = createContext<ContextProps>({
  cartItems: [],
  emptyCart: false,
  setCartItems: () => {},
  addToCart: () => {},
});
export const useCart = () => useContext(CartContext);

export const data = [
  {
    id: "1",
    name: "Fall Limited Edition Sneakers",
    price: "$125.00",
    quantity: 0,
    totalAmount: 0,
  },
];

export const Context = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [emptyCart, setEmptyCart] = useState(false);

  const addToCart = (product: CartItem) => {
    const totalAmount =
      parseFloat(product.price.replace("$", "")) * product.quantity;
    const formattedTotalAmount = `$${totalAmount.toFixed(2)}`;
    const updatedProduct: CartItem = {
      ...product,
      totalAmount: formattedTotalAmount,
    };
    setCartItems((prev: CartItem[]) => [...prev, updatedProduct]);
    setEmptyCart(true);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, emptyCart, setCartItems, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
