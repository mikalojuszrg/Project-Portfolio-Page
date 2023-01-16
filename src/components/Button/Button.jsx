import styles from "./Button.module.scss";

const Button = ({ children, variant }) => {
  return variant === "standard" ? (
    <button className={styles.buttonStandard}>{children}</button>
  ) : (
    <button className={styles.buttonCircle}>{children}</button>
  );
};

export default Button;
