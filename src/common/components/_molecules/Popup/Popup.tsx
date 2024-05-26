import { Button } from "..";
import { useCart } from "../../../context/Index";
import { CartItem } from "../../../types/common";
import { AddCartProduct } from "../../_organisms";

const Popup = () => {
  const { cartItems, emptyCart, setCartItems } = useCart();

  const deleteItem = (product: CartItem) => {
    setCartItems((prev) => prev.filter((item) => item !== product));
  };

  return (
    <div className="absolute top-[80px] right-[340px] xl:top-[105px] xl:right-[220px] bg-white w-[360px] h-[256px] rounded-[10px]">
      <h2 className="flex items-center h-[67px] border border-white border-b-[#E4E9F2] font-bold leading-normal px-[24px]">
        Cart
      </h2>
      {!emptyCart ? (
        <h1 className="flex justify-center items-center font-bold h-[100%]">
          Your cart is empty.
        </h1>
      ) : (
        <div className="w-[screen] h-[190px] overflow-y-auto">
          {cartItems.map((item: any) => {
            return (
              <div key={item.id}>
                <AddCartProduct
                  quantity={item.quantity}
                  totalAmount={item.totalAmount}
                  onClick={() => deleteItem(item)}
                  productName={item.name}
                  price={item.price}
                />
              </div>
            );
          })}
          <Button
            className={
              "flex items-center justify-between w-[312px] h-[56px] px-[119px] mx-[24px] py-[18px] rounded-[10px] bg-[#FF7E1B] text-white hover:bg-[#FFAB6A] font-bold leading-normal"
            }
            onClick={() => console.log("Checkout clicked")}
            children={"Checkout"}
          />
        </div>
      )}
    </div>
  );
};

export default Popup;
