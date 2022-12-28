import { useState } from 'react';

export const useProduct = () => {
  const [ counterProduct, setCounterProduct ] = useState(0);

  // Retorna un valor maximo entre dos valores, en caso que no
  // cumpla la condicion retona 0
  const handleCounterProducts = (value: number) =>
      setCounterProduct((prev) => Math.max(prev + value, 0));

  return {
    counterProduct, 
    handleCounterProducts
  };
}
