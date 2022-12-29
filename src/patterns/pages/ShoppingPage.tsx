import React from 'react'
import { ProductCard } from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffe',
  image: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div className='main-layout-pages '>
      <h1>Shopping - Store</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard product={product} />
      </div>
    </div>
  )
};
