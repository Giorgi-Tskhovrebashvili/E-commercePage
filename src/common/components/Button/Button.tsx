import { ButtonType } from "../../types/common";

const Button = ({ className, onClick, children, context }: ButtonType) => {
  return (
    <button className={className} onClick={onClick}>
          {children}
          {context}
    </button>
  );
};

export default Button;
