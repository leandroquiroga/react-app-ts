import { CSSProperties, ReactElement } from "react";
/*
  * React Element nos permite que podamos añadir elemento del DOM pero en objetos ya que su creacion  bajo costo
  * Podemos defenir las properties para poder especificar que es lo que recibe un componente 
*/

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  customStyles?: CSSProperties
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValue?: InitialValueProps;
};

export interface InitialValueProps {
  count?: number,
  maxCount?: number,
}
export interface UseShoppingCartHook {
  shoppingCart: {
    [key: string]: ShoppingCart;
  };
  products: Product[];
  onProductCounterChange: ({ counter, product }: OnChangeArgs) => void;
}
export interface UseProductArgs{
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number,
  initialValue?: InitialValueProps,
}

export interface OnChangeArgs {
  product: Product;
  counter: number
}
export interface ShoppingCart extends Product{
  counter: number;
};

export interface ProductContextProps {
  handleCounterProducts: (value: number) => void;
  counterProduct: number
  product?: Product;
  className?: string;
};
export interface Product {
  id: string;
  title: string;
  image?: string;
};

export interface ProductsButtonsProps {
  handleCounter: (value: number) => void;
  counter: number;
};
/*
 * Podemos usar de dos manera los props, una es desectrucurando la props que se va a utilizar o 
 * directamente colocar la palabra reservada Props 
*/
export interface ProductCardHOCrops {
  ({ children, product, customStyles }: Props): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Button: (Props: ButtonStylesProps)=> JSX.Element;
};

export interface UseProductHook {
  counterProduct: number;
  handleCounterProducts: (value: number) => void;
};
export interface ProductTitleProps { 
  customStyles?: CSSProperties ;
  title?: string;
  className?: string;
};

export interface ProductImageProps {
  customStyles?: CSSProperties ;
  img?: string;
  className?: string
};

export interface ButtonStylesProps { 
  customStyles?: CSSProperties ;
  className?: string;
};
