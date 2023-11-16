import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from './Drink.module.css'
import IngredientCard from "../../components/IngredientCard/index.js";
const Drink = () => {
  const {id} = useParams()
  const [drink, setDrink] = useState({})

  useEffect(() =>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => setDrink(data.drinks[0]))
  },[id])

  const ingredientsList = () =>{
    let arr = []
    for(let i = 1; i <= 15; i++){
      const value = drink[`strIngredient${i}`]
      if(value){
        arr = [...arr, value]
      }
    }
    return arr
  }

  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <img src={drink.strDrinkThumb} alt=""/>
        </div>
        <div className={styles.col}>
          <div className={styles.content}>
            <h3 className={styles.title}>{drink.strDrink}</h3>
            <p className={styles.subtitle}>{drink.strInstructions}</p>

            <div className={styles.cardContainer}>
            {
              ingredientsList().map((ingredient,idx)=>(
             <IngredientCard  key={idx} name={ingredient}/>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drink;