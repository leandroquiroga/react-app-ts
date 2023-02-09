import { useProduct } from "../hooks/useProduct";

import { Provider } from "../context/ProductContext";
import { Props } from "../interfaces";

import styles from "../styles/styles.module.css";

export const ProductCard = ({ children, product, className, customStyles, onChange, value, initialValue }: Props): JSX.Element => {
 
  const { counterProduct, handleCounterProducts, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValue });

  console.log(isMaxCountReached);
  
  return (
    <Provider value={{
      handleCounterProducts,
      counterProduct,
      product,
      maxCount
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={customStyles}
      >
        {
          children({
            count: counterProduct,
            isMaxCountReached, 
            maxCount: initialValue?.maxCount,
            product,
            handleCounterProducts,
            reset
          })
        }
      </div>  
    </Provider>
  );
};