import styles from "./Navigation.module.scss";

const navigationItems = ["Home", "About", "Works", "Contact"];

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navBar}>
        {navigationItems.map((navItem) => (
          <li className={styles.navBar__item} key={navItem}>
            {navItem}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
