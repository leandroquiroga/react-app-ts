import { useState } from 'react';

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product, ShoppingCart } from '../interfaces';
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

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ShoppingCart }>({
    '1': {...product, counter: 10}
  });

  const onProductCounterChange = () => {
    console.log('Cambiando...');
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
              onChange={ () => onProductCounterChange()}
            >
              <ProductImage className='custom-image' />
              <ProductTitle className='text-white'/>
              <ProductButtons className='custom-btn countLabel' />
            </ProductCard>
          ))
        }
      </div>

      <div className='shopping-cart'>
          <ProductCard
              // key={prod.id}
              product={product2}
              className='bg-dark'
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
      </div>
    </div>
  )
};
