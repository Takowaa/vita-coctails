
import styles from "../../components/ProductCard/ProductCard.module.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/index.js";


const IngredientPage = () => {
const {name} = useParams()
const [ingredient, setIngredient] = useState({})
const [coctails, setCocktails] = useState([])
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
      .then(res => res.json())
      .then(data => setCocktails(data.drinks))

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`)
      .then(res=> res.json())
      .then(data => setIngredient(data.ingredients[0]))
  }, [name]);


  return (
    <>
    <div className={styles.cardContainer}>
      <img
        className={styles.img}
        src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`}
        alt=""
      />
      <p className={styles.title}>{ingredient.strDescription}</p>
    </div>

<div className={styles.cardContainer2}>
      {
        coctails.map((coctail)=>(
          <ProductCard  key={coctail.idDrink} id={coctail.idDrink} img={coctail.strDrinkThumb} title={coctail.strDrink}/>
        ))
      }
</div>

      </>
  );
};

export default IngredientPage;