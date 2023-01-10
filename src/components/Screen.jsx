import styles from './Screen.module.scss';

const Screen = ({ input, output }) => {
  return (
    <div className={styles.Screen}>
      <p className={styles.Input}>{input}</p>
    </div>
  );
}

export default Screen;
