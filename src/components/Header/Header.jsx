import styles from './Header.module.css'
import Button from "../Button/index.js";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://www.thecocktaildb.com/images/logo.png" alt=""/>
      <Button variant='danger' text='Home' />
    </header>
  );
};

export default Header;