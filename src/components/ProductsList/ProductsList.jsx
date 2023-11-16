import styles from './ProductsList.module.css'
import ProductCard from "../ProductCard/index.js";


const ProductsList = ({products, title}) => {
  return (
    <>
      <hr/>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.cardContainer}>
        {
          products.map((coctail) =>(
        <ProductCard  key={coctail.idDrink} id={coctail.idDrink} img={coctail.strDrinkThumb} title={coctail.strDrink}/>
          ))
        }
      </div>
    </>
  );
};

export default ProductsList;