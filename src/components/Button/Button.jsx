import styles from "./Button.module.scss";

const Button = ({ children, variant, onClick }) => {
  return variant === "standard" ? (
    <button onClick={onClick} className={styles.buttonStandard}>
      {children}
    </button>
  ) : (
    <button onClick={onClick} className={styles.buttonCircle}>
      {children}
    </button>
  );
};

export default Button;
