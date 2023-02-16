import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/product';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = (): JSX.Element => {
  /* 
    * Control props nos permite poder controlar los estados de varios componentes
    * en donde se un componente nos permite conocer su estado de elevacion
  */
  
  return (
    <div className='main-layout-pages'>
      <h1>Shopping - Store</h1>
      <ProductCard
        key={product.id}
        product={product}
        className='bg-dark'
        initialValue={{
          count: 0,
          maxCount: 10,
        }}
      > 
        { 
          ({reset, isMaxCountReached, maxCount, handleCounterProducts, count}) => (
            <>
              <ProductImage className='custom-image' />
              <ProductTitle className='text-white' />
              <ProductButtons className='custom-btn countLabel' />

              <button onClick={reset}> Resetear </button>
              <button onClick={() => handleCounterProducts(-2)}> -2 </button>
              {
                ( !isMaxCountReached && <button onClick={() => handleCounterProducts(+2)}> +2 </button>)

              }
              <hr/>
              <span className='text-white'> Count: {count} </span>
              <span className='text-white'> Maximo: {maxCount} </span>
            </>
         )
        }
      </ProductCard>
    </div>
  );
};
