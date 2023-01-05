import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductImageProps } from '../interfaces/index';

import logoNoImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "", className, customStyles }: ProductImageProps) => {

  const { product } = useContext(ProductContext);
  let imgToShow: string;
  /*
    * Dependiendo de si usamos lo que veiene de los props o si usamos los que venga en el context,
    * vamos a utilizar una condicion para definir el valor que usamos en el atributo src.
  */
  
  if (img) {
    imgToShow = img
  } else if (product?.image) {
    imgToShow = product.image
  } else {
    imgToShow = logoNoImage;
  }

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
    className={`${styles.productImg} ${className}`}
    style={customStyles}
    src={imgToShow}
      alt="Product Image"
    />
  );
};