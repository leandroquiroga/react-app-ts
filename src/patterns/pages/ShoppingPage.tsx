import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

export const ShoppingPage = (): JSX.Element => {
  const { shoppingCart, products ,onProductCounterChange } = useShoppingCart();
  /* 
    * Control props nos permite poder controlar los estados de varios componentes
    * en donde se un componente nos permite conocer su estado de elevacion
  */
  
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
              value={shoppingCart[prod.id]?.counter || 0}
              onChange={onProductCounterChange}
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
                value={prod.counter}  
                onChange={onProductCounterChange}
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
