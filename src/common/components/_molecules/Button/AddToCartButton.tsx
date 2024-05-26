import { Button } from "..";
import { AddToCartButtonType } from "../../../types/common";
import { CartIcon } from "../../_atoms";

const AddToCartButton = ({ addToCart }: AddToCartButtonType) => {
  return (
    <Button
      className={
        "flex items-center gap-[15px] w-[327px] xl:w-[272px] h-[56px] xl:px-[65px] px-[104px] py-[20px] rounded-[10px] bg-[#FF7E1B] text-white hover:bg-[#FFAB6A] font-bold leading-normal"
      }
      onClick={addToCart}
      context={"Add to cart"}
    >
      <CartIcon display={"flex"} fill={"#FFF"} />
    </Button>
  );
};

export default AddToCartButton;
