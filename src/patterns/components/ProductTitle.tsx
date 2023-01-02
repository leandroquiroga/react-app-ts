import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

import styles from "../styles/styles.module.css";


/*
  * En caso de que reciba mas de un elemento por pros de debe crear una Interface
  * para detallar el tipo de dato de cada props
*/

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {(title) ? title : product?.title} 
    </span>
  )
};