import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

import styles from "../styles/styles.module.css";
import { ProductTitleProps } from '../interfaces/index';


/*
  * En caso de que reciba mas de un elemento por pros de debe crear una Interface
  * para detallar el tipo de dato de cada props
*/

export const ProductTitle = ({ title, className, customStyles }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span
      className={`${styles.productDescription} ${className}`}
      style={customStyles}
    >
      {(title) ? title : product?.title} 
    </span>
  )
};