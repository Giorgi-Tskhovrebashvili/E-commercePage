import { useState } from "react";
import { AddToCartButton, Counter } from "..";
import { data, useCart } from "../../context/Index";
import { CartItem } from "../../types/common";

const ProductInfo = () => {
  const { addToCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(0);

  console.log("products", cartItems);

  const handleAddToCart = (item: CartItem) => {
    const updatedProduct = {
      ...item,
      quantity: quantity
    };
    addToCart(updatedProduct);
    setQuantity(0);
  };

  return (
    <div className="w-[445px] h-[426px] flex flex-col gap-[28px]">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <span className="text-[13px] font-bold leading-normal tracking-[2px] uppercase text-[#FF7E1B]">
              Sneaker Company
            </span>
            <h1 className="text-[44px] font-bold leading-[48px] text-[#1D2026]">
              {item.name}
            </h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex flex-col w-[173px] h-[68px] gap-[10px]">
              <div className="flex justify-between">
                <h3 className="text-[28px] font-bold text-[#1D2026]">
                  {item.price}
                </h3>
                <span className="w-[51px] h-[27px] flex items-center rounded-[6px] bg-[#FFEEE2] px-[8px] py-[5px] text-[#FF7E1B] font-bold leading-normal">
                  50%
                </span>
              </div>
              <p className="font-bold text-[#B6BCC8] line-through">$250.00</p>
            </div>
            <div className="flex gap-[16px]">
              <Counter
                decrementCount={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                incrementCount={() => setQuantity(quantity + 1)}
                count={quantity}
              />
              <AddToCartButton addToCart={() => handleAddToCart(item)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductInfo;
