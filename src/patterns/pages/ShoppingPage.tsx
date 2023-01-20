import { useState } from 'react';

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product, ShoppingCart, OnChangeArgs } from '../interfaces';
import '../styles/custom-styles.css';
// import { ProductButtons } from "../components/ProductButtons";
// import { ProductCard } from "../components/ProductCard";
// import { ProductImage } from "../components/ProductImage";
// import { ProductTitle } from "../components/ProductTitle";
// import ProductCard from '../components';
// import { stylesComponent } from '../components/Styles';

const product = {
  id: '1',
  title: 'Coffe - Card',
  image: './coffee-mug.png'
};

const product2 = {
  id: '2',
  title: 'Coffe - Meme',
  image: './coffee-mug2.png'
}

const products: Product[] = [product, product2];

export const ShoppingPage = () => {

  /* 
    * Control props nos permite poder controlar los estados de varios componentes
    * en donde se un componente nos permite conocer su estado de elevacion
  */

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ShoppingCart }>({});
  const onProductCounterChange = ({counter, product}: OnChangeArgs)  => {
    /*
    * Para cambiar el estado de shoppingCart debemos retornar una copia del valor previo 
    * y que la llave [product.id] apunte al producto a acutual con su contador de productos
    */
   setShoppingCart(oldShoppingCart => {
     
     console.log(shoppingCart);
      /*
        * Si el producto por el ID existe sera el nuevo producto en el carrito, si no existe el produto
        * con ese ID es nulo y es por eso que sea asigna el valor del producto y tambien con el contador en 
      */
      const productInCart: ShoppingCart = oldShoppingCart[product.id] || { ...product, counter: 0 };
      
      if ((Math.max(productInCart.counter + counter), 0) > 0) {
        productInCart.counter += counter
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      };

      /*
        * Si la sumatoria es igual a 0 entonces se debe  borrar el producto
        * Desectructuramos la propiedad computada del objeto antes de ser eliminado
        * y asi retornamos el resto de todos los elementos
      */

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return { ...rest}
        
      
      // if (counter === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return { ...rest}
      // }
      // return {
      //   ...oldShoppingCart, 
      //   [product.id]: { ...product, counter },
      // }
    });

  }
  return (
    <div className='main-layout-pages'>
      <h1>Shopping - Store</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        
        {
          products.map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              className='bg-dark'
              onChange={onProductCounterChange}
              value={shoppingCart[prod.id]?.counter || 0}
            >
              <ProductImage className='custom-image' />
              <ProductTitle className='text-white'/>
              <ProductButtons className='custom-btn countLabel' />
            </ProductCard>
          ))
        }
      </div>

      <div className='shopping-cart'>

        {/*
         * Convertimos las entries del objeto en una arreglo para poder mapearlo y poder pintar 
         * el compomente con los productos que agregamos al carrito
        */}
        {
          Object.entries(shoppingCart).map(([id, prod]) => (
            <ProductCard
                key={id}
                product={prod}
                className='bg-dark'
                onChange={onProductCounterChange}
                value={prod.counter}  
                customStyles={{
                  width: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <ProductImage className='custom-image' />
                <ProductTitle className='text-white'/>
                <ProductButtons className='custom-btn countLabel' />
              </ProductCard>
          ))  
        }
      </div>
    </div>
  )
};
