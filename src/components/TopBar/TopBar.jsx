import styles from "./TopBar.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <header className={styles.header}>
      <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
        <Logo />
      </Link>
      <Navigation />
    </header>
  );
};

export default TopBar;
