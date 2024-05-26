import { Button } from "..";
import { MenuBtnType } from "../../../types/common";
import { MenuBtnIcon } from "../../_atoms";

const MenuBtn = ({ OpenMenu }: MenuBtnType) => {
  return (
    <Button className={""} onClick={OpenMenu}>
      <MenuBtnIcon className={"xl:hidden"} />
    </Button>
  );
};

export default MenuBtn;
