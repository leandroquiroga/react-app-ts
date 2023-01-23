import { Product } from '../interfaces/index';

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

export const products: Product[] = [product, product2];