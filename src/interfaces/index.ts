import { LazyExoticComponent } from 'react'

// Creamos un tipo para indicar que es de tipo JSX.Element
type JSXComponent = () => JSX.Element;


export interface Route {
  to: string, 
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent; // Indicamos que sea de tipo LazyComponent o un funtional component
  name: string
}