import { CSSProperties, ReactElement } from "react";

/*
  * React Element nos permite que podamos añadir elemento del DOM pero en objetos ya que su creacion  bajo costo
  * Podemos defenir las properties para poder especificar que es lo que recibe un componente 
*/

export interface ProductContextProps {
  handleCounterProducts: (value: number) => void;
  counterProduct: number
  product?: Product;
  className?: string
};

export interface Props {
  product?: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  customStyles?: CSSProperties
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
}