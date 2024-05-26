import { Header } from "..";
import { MainLayoutType } from "../../../types/common";

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <div className="flex flex-col items-center m-auto w-[375px] xl:w-[100%] xl:px-[165px] xl:py-[28px] xl:gap-[90px]">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
