import { Header } from "..";

interface MainLayoutType {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] px-[165px] py-[28px] gap-[90px]">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
