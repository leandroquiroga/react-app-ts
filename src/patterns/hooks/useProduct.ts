import { useEffect, useRef, useState } from 'react';
import { UseProductArgs } from '../interfaces';

export const useProduct = ({ onChange, product, value = 0} : UseProductArgs) => {
  const [counterProduct, setCounterProduct] = useState(value);
  /*
    * Usamos el useRef para que no tengamos que redibujar los componentes, en caso de que cambie
  */

  const isControlled = useRef(!!onChange);
  /*
    * Retorna un valor maximo entre dos valores, en caso que no
    * cumpla la condicion retona 0
  */
  const handleCounterProducts = (value: number) => {
    /*
    * Si se tiene el control del onChange retornara el valor actual, en caso de que no tengamos
    * el control el codigo sera ejecutado de la misma manera
    */
    if (isControlled) {
      return onChange!({counter: value, product})
    }
    /*
      * Se crea una variable para que tome el nuevo valor y no el ultimo valor del counterProducts
    */
    const newValue =  Math.max(counterProduct + value, 0)
    // setCounterProduct((prev) => Math.max(prev + value, 0));
    setCounterProduct(newValue);
    onChange && onChange({
      counter: newValue,
      product
    });
  }
  /*
   * Se setea el nuevo valor cuando se detecta que ha cambiado  
  */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setCounterProduct(value);
  }, [value]);
  
  return {
    counterProduct, 
    handleCounterProducts
  };
}
