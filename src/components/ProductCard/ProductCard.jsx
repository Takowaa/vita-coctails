import styles from './ProductCard.module.css'
import {Link} from "react-router-dom";

const ProductCard = ({img,title,id}) => {
  return (
<>
    <Link className={styles.card}  to={`/drink/${id}`}>
        <img  className={styles.img} src={img} alt=""/>
        <p className={styles.subtitle}>{title}</p>
    </Link>
</>
  );
};

export default ProductCard;