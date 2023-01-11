import { useState } from 'react';

export const useProduct = (onChange?: () => void) => {
  const [counterProduct, setCounterProduct] = useState(0);

  // Retorna un valor maximo entre dos valores, en caso que no
  // cumpla la condicion retona 0
  const handleCounterProducts = (value: number) => {
    setCounterProduct((prev) => Math.max(prev + value, 0));
    
    onChange && onChange()
  }

  return {
    counterProduct, 
    handleCounterProducts
  };
}
