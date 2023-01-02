
import { ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components'
// import { ProductButtons } from "../components/ProductButtons";
// import { ProductCard } from "../components/ProductCard";
// import { ProductImage } from "../components/ProductImage";
// import { ProductTitle } from "../components/ProductTitle";
// import ProductCard from '../components';

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
    <div className='main-layout-pages '>
      <h1>Shopping - Store</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title title={ 'Coffe Cup' }/>
            <ProductCard.Button />
        </ProductCard>
        
        <ProductCard product={product}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
};
