import { useEffect, useRef, useState } from 'react';
import { UseProductArgs, UseProductHook } from '../interfaces';

export const useProduct = ({ onChange, product, value = 0, initialValue } : UseProductArgs): UseProductHook => {
  
  const [counterProduct, setCounterProduct] = useState<number>(initialValue?.count || value )
  /*
    * Se utiliza el useRef para saber si el componente esta montado, en caso de estar montado 
    * devuelve el actaul valor, sino el valor predefinido
  */
  
  const isMonted = useRef(false);
  
  const handleCounterProducts = (value: number) => {

    // Nos quedamos con el valor maximo entre el anterior y el acutual
    let newValue = Math.max(counterProduct + value, 0);

    // Si viene algun valor por como tope nos quedamos con el minimo
    if (initialValue?.maxCount) newValue = Math.min(newValue + initialValue.maxCount);
    setCounterProduct(newValue);
    onChange && onChange({ counter: newValue, product });
  }
  /*
   * Se setea el nuevo valor cuando se detecta que ha cambiado  
  */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if(!isMonted.current) return
    setCounterProduct(value);
  }, [value]);

  useEffect(() => {
    isMonted.current = false
  });
  
  return {
    counterProduct, 
    handleCounterProducts
  };
}
