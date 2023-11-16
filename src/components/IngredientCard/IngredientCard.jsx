
import { Link } from "react-router-dom";
import styles from "../ProductCard/ProductCard.module.css";

const IngredientCard = ({ name }) => {
  return (
    <div className={styles.card}>
      <Link  to={`/ingredient/${name}`}>
        <img
          className={styles.img}
          src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`}
          alt=""
        />
        <p className={styles.subtitle}>{name}</p>
      </Link>

    </div>
  );
};

export default IngredientCard;
