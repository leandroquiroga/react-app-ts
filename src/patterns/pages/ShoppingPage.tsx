
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
// import { ProductButtons } from "../components/ProductButtons";
// import { ProductCard } from "../components/ProductCard";
// import { ProductImage } from "../components/ProductImage";
// import { ProductTitle } from "../components/ProductTitle";
// import ProductCard from '../components';
// import { stylesComponent } from '../components/Styles';

const product = {
  id: '1',
  title: 'Coffe',
  image: './coffee-mug.png'
}

export const ShoppingPage = () => {
  /* 
    * Cada componente hijo hacer referencia directa al componente padre
    * a este patron se lo conoce como Compund Component
  */  
  return (
    <div className='main-layout-pages'>
      <h1>Shopping - Store</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product}>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title title={'Coffe Cup'} />
          <ProductCard.Button />
        </ProductCard>
        
        <ProductCard
          product={product}
          className='bg-dark'
        >
          <ProductImage className='custom-image' />
          <ProductTitle
            className='text-white'/>
          <ProductButtons className='custom-btn countLabel' />
        </ProductCard>
        
        <ProductCard
          product={product}
          customStyles={{
            backgroundColor: '#A324AE'
          }}
        >
          <ProductImage
            customStyles={{
              boxShadow: '10px, 10px, 10px, rgba(0,0,0,0.2)'
            }} />
          <ProductTitle
            className='text-white'
            customStyles={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}
          />
          <ProductButtons
            className='custom-btn countLabel'
            customStyles={{
              display: 'flex',
              justifyContent: 'end'
            }}
          />
        </ProductCard>
      </div>
    </div>
  )
};
