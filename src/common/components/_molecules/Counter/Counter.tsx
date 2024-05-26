import { Button } from "..";
import { CounterType } from "../../../types/common";

const Counter = ({ decrementCount, incrementCount, count }: CounterType) => {
  return (
    <div className="flex justify-around items-center bg-[#F6F8FD] w-[327px] h-[56px] xl:w-[157px] rounded-[10px]">
      <Button
        className={
          "text-[#FF7E1B] text-[30px] font-medium hover:text-[#FFAB6A]"
        }
        onClick={decrementCount}
        children="-"
      />
      <div className="font-bold leading-normal text-[#1D2026]">{count}</div>
      <Button
        className={
          "text-[#FF7E1B] text-[30px] font-medium hover:text-[#FFAB6A]"
        }
        onClick={incrementCount}
        children="+"
      />
    </div>
  );
};

export default Counter;
