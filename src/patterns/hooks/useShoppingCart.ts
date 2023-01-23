import { useState } from "react";
import { ShoppingCart, OnChangeArgs, UseShoppingCartHook } from '../interfaces/index';
import { products } from '../data/product';


export const useShoppingCart = (): UseShoppingCartHook => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ShoppingCart }>({});

  const onProductCounterChange = ({ counter, product }: OnChangeArgs) => {
    /*
      * Para cambiar el estado de shoppingCart debemos retornar una copia del valor previo 
      * y que la llave [product.id] apunte al producto a acutual con su contador de productos
    */
    setShoppingCart(oldShoppingCart => {

      const productInCart: ShoppingCart = oldShoppingCart[product.id] || { ...product, counter: 0 };
      
      if (Math.max(productInCart.counter + counter, 0) > 0) {
        
        productInCart.counter += counter; 
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      };
      /*
        * Si la sumatoria es igual a 0 entonces se debe  borrar el producto
        * Desectructuramos la propiedad computada del objeto antes de ser eliminado
        * y asi retornamos el resto de todos los elementos
      */

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;    
      return { ...rest };
    
    });    
  };
  return {
    shoppingCart,
    products,
    onProductCounterChange
  };
};