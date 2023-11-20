import Hero from "../../components/Hero/index.js";
import ProductsList from "../../components/ProductsList/index.js";
import {useEffect, useState} from "react";
import IngredientList from "../../components/IngredientList/index.js";

const HomePage = () => {

  const [latestProducts, setLastestProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(()=>{
    fetch('https://www.thecocktaildb.com/api/json/v2/1/list.php?i=list')
      .then(res => res.json())
      .then(data => setIngredients(data.drinks))

    fetch('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
      .then(res => res.json())
      .then(data => setLastestProducts(data.drinks))
    fetch('https://www.thecocktaildb.com/api/json/v2/1/latest.php')
      .then(res => res.json())
      .then(data => setPopularProducts(data.drinks))
  },[])

  return (
    <>
      <Hero />
      <ProductsList  title='Popular Drinks' products={popularProducts.slice(0,8)} />
      <ProductsList title='Latest Drinks' products={latestProducts.slice(0,8)}  />
      <IngredientList title='ingredients' ingredient={ingredients.slice(0,4)} />
    </>
  );
};

export default HomePage;


