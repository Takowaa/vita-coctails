import styles from './Footer.module.css'

const Footer = () => {
  return (
   <>
   <footer className={styles.footer}>

     <p className={styles.title}>© 2023 TheCocktailDB. <br/>
       Proudly built in the UK</p>
         <div>
           <img src="https://www.thecocktaildb.com/images/logo-tsdb.png" alt=""/>
           <img src="https://www.thecocktaildb.com/images/logo-tadb.png" alt=""/>
           <img src="https://www.thecocktaildb.com/images/logo-tmdb.png" alt=""/>
           </div>
     <nav>
       <a className={styles.link} href="/">Missing</a>
       <a className={styles.link} href="/">About</a>
       <a className={styles.link} href="/">Faq</a>
       <a className={styles.link} href="/">Contact</a>
     </nav>
   </footer>
   </>
  );
};

export default Footer;