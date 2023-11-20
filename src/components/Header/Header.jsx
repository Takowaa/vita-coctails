import styles from './Header.module.css'
import Button from "../Button/index.js";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="https://www.thecocktaildb.com/images/logo.png" alt=""/>
      </Link>
      <Button variant='danger' text='Home' />
    </header>
  );
};

export default Header;
