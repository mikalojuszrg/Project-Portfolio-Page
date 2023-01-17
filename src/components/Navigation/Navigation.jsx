import { useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";

const navigationItems = ["Home", "About", "Works", "Contact"];

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul className={styles.navBar}>
        {navigationItems.map((navItem) => (
          <li
            className={styles.navBar__item}
            key={navItem}
            onClick={() =>
              navigate(navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`)
            }
          >
            {navItem}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
