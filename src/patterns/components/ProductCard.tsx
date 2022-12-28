import styles from '../styles/styles.module.css'
// import logoNoImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

export const ProductCard = () => {

  const { counterProduct, handleCounterProducts } = useProduct();

  return (
    <div className={ styles.productCard }>
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="Coffe Mug"
      />
      {/* <img 
        className={ styles.productImg } 
        src={ logoNoImage } 
        alt="Coffe Mug"
      /> */}

      <span className={styles.productDescription}> Coffe Mug</span>
      
      <div className={styles.buttonsContainer}>

        <button
          className={styles.buttonMinus}
          onClick={() => handleCounterProducts(-1)}
        > - </button>
        <div className={ styles.countLabel }> { counterProduct } </div>
        <button
          className={styles.buttonAdd}
          onClick={() => handleCounterProducts(+1)}
        > + </button>
      
      </div>
    </div>
  )
}
