import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img
        className={styles.logo__image}
        src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
        alt="logo"
      />
      <p className={styles.logo__text}>MIKALOJUS ŽIRGULIS</p>
    </div>
  );
};

export default Logo;
