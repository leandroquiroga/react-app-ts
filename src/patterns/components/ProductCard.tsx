import { useProduct } from "../hooks/useProduct";

import { Provider } from "../context/ProductContext";
import { Props } from "../interfaces";

import styles from "../styles/styles.module.css";

export const ProductCard = ({ children, product, className, customStyles }: Props) => {
 
  const { counterProduct, handleCounterProducts } = useProduct();

  return (
    <Provider value={{
      handleCounterProducts,
      counterProduct,
      product,
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={customStyles}
      >
        {children}
      </div>  
    </Provider>
  );
};


/*
 * Podemos añadirle al componente nuevas propiedades 
 * Estas propiedades deben apuntar a dichos componentes
*/

// ProductCard.Title   = ProductTitle;
// ProductCard.Image   = ProductImage;
// ProductCard.Button  = ProductButtons