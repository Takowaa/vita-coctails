import styles from './Hero.module.css'


const Hero = () => {
  return (
    <>
      <div className={styles.dFlex}>
        <img src="https://www.thecocktaildb.com/images/cocktail_left.png" alt=""/>
        <div>
          <h1 className={styles.title}>Welcome to TheCocktailDB</h1>
          <p className={styles.subtitle}>An open, crowd-sourced database of drinks and cocktails from around the world.
            We also offer a free cocktail API for anyone wanting to use it.
            If you like the site, please consider supporting us on Patreon by clicking the link below...
          </p>
         <div>
           <img src="https://www.thecocktaildb.com/images/patreon_logo.png" alt=""/>
         </div>

        </div>
        <img src="https://www.thecocktaildb.com/images/cocktail_left.png" alt=""/>
      </div>
    </>
  );
};

export default Hero;