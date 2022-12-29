
// Podemos defenir las properties para poder especificar que es lo que recibe un componente
export interface Props {
  product: Product;
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