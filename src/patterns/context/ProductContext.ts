import { createContext } from "react";
import { ProductContextProps } from "../interfaces";

/* 
  * Creamos el context para que los componentes puedan proporcionar o leer infromacion entre si
  * para detallar el tipo de dato de cada pros
*/
const ProductContext = createContext({} as  ProductContextProps);
const { Provider } = ProductContext;

export {
  ProductContext,
  Provider,
}