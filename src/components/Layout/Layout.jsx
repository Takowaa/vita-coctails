import  { Outlet } from "react-router-dom"
import styles from './Layout.module.css'
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <Outlet />
        </div>
        <Footer />
      </div>
  );
};

export default Layout;
