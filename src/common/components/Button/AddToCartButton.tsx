import { Button, CartIcon } from "..";

interface AddToCartButtonType {
  addToCart: () => void;
}

const AddToCartButton = ({ addToCart }: AddToCartButtonType) => {
  return (
    <Button
      className={
        "flex items-center justify-between w-[272px] h-[56px] px-[76px] py-[18px] rounded-[10px] bg-[#FF7E1B] text-white hover:bg-[#FFAB6A] font-bold leading-normal"
      }
      onClick={addToCart}
      context={"Add to cart"}
    >
      <CartIcon display={"flex"} fill={"#FFF"} />
    </Button>
  );
};

export default AddToCartButton;
