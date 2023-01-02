import { useProduct } from "../hooks/useProduct";

import { Provider } from "../context/ProductContext";
import { Props } from "../interfaces";

import styles from "../styles/styles.module.css";

export const ProductCard = ({ children, product }: Props) => {
 
  const { counterProduct, handleCounterProducts } = useProduct();

  return (
    <Provider value={{
      handleCounterProducts,
      counterProduct,
      product
    }}>
      <div className={styles.productCard}>
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