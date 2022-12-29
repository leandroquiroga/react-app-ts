import styles from "../styles/styles.module.css";
import logoNoImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { Props } from "../interfaces";
import { ProductsButtonsProps } from "../interfaces/index";

export const ProductImage = ({ img = "" }) => {
  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      className={styles.productImg}
      src={img ? img : logoNoImage}
      alt="Product Image"
    />
  );
};

// En caso de que reciba mas de un elemento por pros de debe crear una Interface
// para detallar el tipo de dato de cada pros
export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}> {title} </span>;
};

export const ProductButtons = ({
  counter,
  handleCounter,
}: ProductsButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleCounter(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={styles.buttonAdd}
        onClick={() => handleCounter(+1)}
      >
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ product }: Props) => {
  const { counterProduct, handleCounterProducts } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductImage img={product.image} />
      <ProductTitle title={product.title} />
      <ProductButtons
        counter={counterProduct}
        handleCounter={handleCounterProducts}
      />
    </div>
  );
};
