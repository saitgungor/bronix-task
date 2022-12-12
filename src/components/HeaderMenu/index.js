import styles from "./HeaderMenu.module.css";

const HeaderMenu = () => {
  return (
    <ul className={styles.menuContainer}>
      <li className={`${styles.listItem}`}>About Us</li>
      <li className={`${styles.listItem}`}>Games</li>
      <li className={`${styles.listItem} ${styles.active}`}>News</li>
      <li className={`${styles.listItem}`}>Career</li>
      <li className={`${styles.listItem}`}>Contact</li>
    </ul>
  );
};
export default HeaderMenu;
