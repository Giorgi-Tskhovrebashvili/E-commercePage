import { Link } from "react-router-dom";
import { Button, CartIcon, HomeIcon, Popup, ProfileImage } from "..";
import { useState } from "react";
import { useCart } from "../../context/Index";

const Header = () => {
  const [show, setShow] = useState(false);
  const { cartItems } = useCart();
  
  const handlePopup = () => setShow(!show);

  return (
    <div className="flex justify-between items-center w-[1110px] h-[84px] border-2 border-white border-b-[#E4E9F2]">
      <div className="flex justify-between items-center w-[591px] h-[84px]">
        <Link to={"/"}>
          <HomeIcon width={138} height={20} />
        </Link>
        <div className="flex items-center gap-[32px] h-[84px]">
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
      <div className="flex items-center gap-[46px]">
        <Button className={"h-[16px] relative"} onClick={handlePopup}>
          <CartIcon display={"flex"} fill={"#69707D"} className={"hover:fill-black"} />
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
