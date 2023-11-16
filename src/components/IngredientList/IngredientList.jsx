import styles from "../ProductsList/ProductsList.module.css";
import IngredientCard from "../IngredientCard/index.js";

const IngredientList = ({ingredient,title}) => {
  return (
    <div>
      <>
        <hr/>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.cardContainer}>
          {
            ingredient.map((ingred,idx) =>(
              <IngredientCard key={idx} name={ingred.strIngredient1} />
            ))
          }
        </div>
      </>
    </div>
  );
};

export default IngredientList;