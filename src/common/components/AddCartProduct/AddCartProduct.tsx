import { DeleteBtn } from "..";
import { AddCartProductType } from "../../types/common";
import productImage from "../ImageDisplay/image1.png";

const AddCartProduct = ({
  productName,
  price,
  quantity,
  totalAmount,
  onClick,
}: AddCartProductType) => {
  return (
    <div className="flex gap-[17px] p-[24px]">
      <img className="w-[50px] h-[50px] rounded-[5px]" src={productImage} alt="" />
      <div>
        <p>{productName}</p>
        <div className="flex gap-[10px]">
          <div className="flex gap-[3px]">
            <span>{price} x</span>
            <span>{quantity}</span>
          </div>
          <span className="text-[#1D2026] font-bold">{totalAmount}</span>
        </div>
      </div>
      <button className='' onClick={onClick}>
        <DeleteBtn />
      </button>
    </div>
  );
};

export default AddCartProduct;
