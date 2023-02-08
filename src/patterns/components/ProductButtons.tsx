import { useCallback, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
// import { ProductButtonsProps } from '../interfaces/index';

import styles from "../styles/styles.module.css";
import { ButtonStylesProps } from "../interfaces";
// import { StylesProps } from "../interfaces";
// import { styles, stylesComponent } from './Styles';

export const ProductButtons = ( { className, customStyles }: ButtonStylesProps ): JSX.Element  => {

  /*
   * Utilizando el useContext que reciba el ProductContext nos garantizamos de 
   * devuelva los valores del contexto segun el contexto que le hayamos pasado,
   * en este caso el contexto es ProductContext
  */
  
  const { counterProduct, handleCounterProducts, maxCount } = useContext(ProductContext);
  
  // const isMaxReached = useCallback(() => {
  //   if (counterProduct === maxCount) return true
  //   return false;
  // }, [counterProduct, maxCount]);

  // Refactor del useCallback original
  const isMaxReached = useCallback( 
    () => !!maxCount && counterProduct === maxCount,
    [counterProduct, maxCount]
  )
  return (
    <div
      className={`${styles.buttonsContainer} ${className}`}
      style={customStyles}
    >
      <button
        className={`${styles.buttonMinus}`}
        onClick={() => handleCounterProducts(-1)}
      >
        -
      </button>
      <div className={`${styles.countLabel}`}> {counterProduct} </div>
      <button
        className={ `${styles.buttonAdd} ${isMaxReached() && styles.disable}` }
        onClick={() => handleCounterProducts(+1)}
      >
        +
      </button>
    </div>
  );
};