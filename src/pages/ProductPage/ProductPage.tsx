import { ImageDisplay, ProductInfo } from "../../common/components/_organisms";

const ProductPage = () => {
  return (
    <div className="flex flex-col items-center gap-[24px] xl:flex-row xl:gap-[125px]">
      <ImageDisplay />
      <ProductInfo />
    </div>
  );
};

export default ProductPage;
