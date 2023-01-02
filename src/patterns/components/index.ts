import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCrops } from '../interfaces/index';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductButtons } from './ProductButtons';

export const ProductCard: ProductCardHOCrops = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Button: ProductButtons

});

export default ProductCard;