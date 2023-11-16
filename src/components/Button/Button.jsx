import styles from './Button.module.css'
import classNames from "classnames";

const Button = ({variant,text}) => {
  const stylez = classNames(styles.btn,{
    [styles.danger]: variant === 'danger'
  })
  return (
    <button className={stylez}>{text}</button>
  );
};

export default Button;