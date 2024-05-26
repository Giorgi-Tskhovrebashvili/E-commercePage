import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../../context/Index";
import { MenuBtn, Button, Popup } from "..";
import { HomeIcon, Close, CartIcon, ProfileImage } from "../../_atoms";

const Header = () => {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { cartItems } = useCart();

  const handlePopup = () => setShow(!show);
  const handleOpenMenu = () => setOpenMenu(!openMenu);
  const closeModal = () => {
    setOpenMenu(false);
  };

  return (
    <div className="flex xl:justify-between items-center w-[375px] h-[24px] p-[24px] gap-[89px] xl:w-[1110px] xl:h-[84px] xl:border-2 xl:border-white xl:border-b-[#E4E9F2]">
      <div className="flex xl:justify-between items-center gap-[16px] xl:w-[591px] xl:h-[84px]">
        <MenuBtn OpenMenu={handleOpenMenu} />
        <Link to={"/"}>
          <HomeIcon width={138} height={20} />
        </Link>
        {openMenu && (
          <div className="w-[375px] fixed left-[402px] inset-0 flex bg-black bg-opacity-75 z-50">
            <div className="p-[25px] flex flex-col gap-[54px] fixed left-[400px] bg-white z-50 w-[250px] h-[100%]">
              <button className="" onClick={closeModal}>
                <Close fill={"#69707D"} />
              </button>
              <div className="text-[#1D2026] text-[18px] font-bold w-[94px] h-[210px] flex flex-col gap-[22px]">
                <Link
                  className="flex items-center hover:border-4 border-white border-b-[#FF7E1B]"
                  to={"/Collections"}
                >
                  Collections
                </Link>
                <Link
                  className="flex items-center hover:border-4 border-white border-b-[#FF7E1B]"
                  to={"/Men"}
                >
                  Men
                </Link>
                <Link
                  className="flex items-center hover:border-4 border-white border-b-[#FF7E1B]"
                  to={"/Women"}
                >
                  Women
                </Link>
                <Link
                  className="flex items-center hover:border-4 border-white border-b-[#FF7E1B]"
                  to={"/About"}
                >
                  About
                </Link>
                <Link
                  className="flex items-center hover:border-4 border-white border-b-[#FF7E1B]"
                  to={"/Contact"}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="hidden xl:flex xl:items-center xl:gap-[32px] xl:h-[84px]">
          <Link
            className="h-[84px] flex items-center hover:border-4 border-white border-b-[#FF7E1B]"
            to={"/Collections"}
          >
            Collections
          </Link>
          <Link
            className="h-[84px] flex items-center hover:border-4 border-white border-b-[#FF7E1B]"
            to={"/Men"}
          >
            Men
          </Link>
          <Link
            className="h-[84px] flex items-center hover:border-4 border-white border-b-[#FF7E1B]"
            to={"/Women"}
          >
            Women
          </Link>
          <Link
            className="h-[84px] flex items-center hover:border-4 border-white border-b-[#FF7E1B]"
            to={"/About"}
          >
            About
          </Link>
          <Link
            className="h-[84px] flex items-center hover:border-4 border-white border-b-[#FF7E1B]"
            to={"/Contact"}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-[22px] xl:gap-[46px]">
        <Button className={"h-[16px] relative"} onClick={handlePopup}>
          <CartIcon
            display={"flex"}
            fill={"#69707D"}
            className={"hover:fill-black"}
          />
          <span className="w-[19px] h-[13px] bg-[#FF7E1B] rounded-[6.5px] text-[#FFFFFF] text-[10px] font-bold leading-normal text-center px-[6px] absolute top-[-5px] right-[-8px]">
            {cartItems.length}
          </span>
        </Button>
        {show && <Popup />}
        <ProfileImage />
      </div>
    </div>
  );
};

export default Header;
