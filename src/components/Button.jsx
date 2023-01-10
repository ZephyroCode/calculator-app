import styles from "./Button.module.scss";

const Button = ({ value, isNumber, clickHandler }) => {
  return (
    <button className={`${styles.Button} ${isNumber ? styles.Num : styles.Sign}`} onClick={clickHandler}>{value}</button>
  );
}

export default Button;
