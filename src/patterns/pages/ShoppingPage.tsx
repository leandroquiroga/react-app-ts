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
          (args) => (
            <>
              <ProductImage className='custom-image' />
              <ProductTitle className='text-white' />
              <ProductButtons className='custom-btn countLabel' />
              {/* <button onClick={reset}> Reset </button> */}

              {JSON.stringify(args, null, 3)}
            </>
         )
        }
      </ProductCard>
    </div>
  );
};
