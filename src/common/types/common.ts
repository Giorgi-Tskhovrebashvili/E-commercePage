export interface HomeIconType {
  width: number;
  height: number;
}

export interface ButtonType {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
  context?: string;
}

export interface AddCartProductType {
  productName: string;
  price: string;
  quantity: string;
  totalAmount: string;
  onClick: () => void;
}

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  totalAmount: number | string;
}

export interface ContextProps {
  cartItems: CartItem[];
  emptyCart: boolean;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (product: CartItem) => void;
}

export interface MainLayoutType {
  children: React.ReactNode;
}

export interface CounterType {
  decrementCount: () => void;
  incrementCount: () => void;
  count: any;
}

export interface AddToCartButtonType {
  addToCart: () => void;
}

export interface MenuBtnType {
  OpenMenu: () => void;
}

export interface CloseType {
  fill: string;
}

export interface CartIconType {
  display: string;
  fill: string;
  className?: string;
}

export interface MenuBtnIconType {
  className: string;
}
