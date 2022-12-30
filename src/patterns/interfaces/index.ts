import { ReactElement } from "react";

/*
  * React Element nos permite que podamos añadir elemento del DOM pero en objetos ya que su creacion  bajo costo
 
  * Podemos defenir las properties para poder especificar que es lo que recibe un componente 
*/

export interface ProductContextProps {
  handleCounterProducts: (value: number) => void;
  counterProduct: number
  product?: Product;
};

export interface Props {
  product?: Product;
  children?: ReactElement | ReactElement[];
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