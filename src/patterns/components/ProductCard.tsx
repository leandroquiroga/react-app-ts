import { useProduct } from "../hooks/useProduct";

import { Provider } from "../context/ProductContext";
import { Props } from "../interfaces";

import styles from "../styles/styles.module.css";

export const ProductCard = ({ children, product, className, customStyles, onChange, value, initialValue }: Props): JSX.Element => {
 
  const { counterProduct, handleCounterProducts } = useProduct({ onChange, product, value, initialValue });

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