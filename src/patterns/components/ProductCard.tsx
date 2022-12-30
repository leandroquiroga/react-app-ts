import styles from "../styles/styles.module.css";
import logoNoImage from "../assets/no-image.jpg";
import { Props } from "../interfaces";
import { ProductContextProps } from '../interfaces/index';
import { createContext, useContext } from "react";
import { useProduct } from "../hooks/useProduct";

/*
 * Creamos el context para que los componentes puedan proporcionar o leer infromacion entre si
 */
const ProductContext = createContext({} as  ProductContextProps);
const { Provider } = ProductContext;


export const ProductImage = ({ img = "" }) => {

  const { product } = useContext(ProductContext);
  let imgToShow: string;
  /*
    * Dependiendo de si usamos lo que veiene de los props o si usamos los que venga en el context,
    * vamos a utilizar una condicion para definir el valor que usamos en el atributo src.
  */
  
  if (img) {
    imgToShow = img
  } else if (product?.image) {
    imgToShow = product.image
  } else {
    imgToShow = logoNoImage;
  }

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      className={styles.productImg}
      src={imgToShow}
      alt="Product Image"
    />
  );
};

// En caso de que reciba mas de un elemento por pros de debe crear una Interface
// para detallar el tipo de dato de cada pros
export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);


  return (
    <span className={styles.productDescription}>
      {(title) ? title : product?.title} 
    </span>
  )
};

export const ProductButtons = () => {

  /*
   * Utilizando el useContext que reciba el ProductContext nos garantizamos de 
   * devuelva los valores del contexto segun el contexto que le hayamos pasado,
   * en este caso el contexto es ProductContext
   
  */
  const {counterProduct, handleCounterProducts} = useContext(ProductContext);
  
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleCounterProducts(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}> {counterProduct} </div>
      <button
        className={styles.buttonAdd}
        onClick={() => handleCounterProducts(+1)}
      >
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ children, product }: Props) => {
 
  const { counterProduct, handleCounterProducts } = useProduct();

  return (
    <Provider value={{
      handleCounterProducts,
      counterProduct,
      product
    }}>
      <div className={styles.productCard}>
        {children}
      </div>  
    </Provider>
  );
};


/*
 * Podemos añadirle al componente nuevas propiedades 
 * Estas propiedades deben apuntar a dichos componentes
*/

ProductCard.Title   = ProductTitle;
ProductCard.Image   = ProductImage;
ProductCard.Button  = ProductButtons