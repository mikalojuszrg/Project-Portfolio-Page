import styles from "./TopBar.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const TopBar = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default TopBar;
