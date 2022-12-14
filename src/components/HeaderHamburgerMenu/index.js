import footerLogo from "../../Assets/images/footer-logo.png";
import styles from "./HeaderHamburgerMenu.module.css";

const HeaderHamburgerMenu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.logo} src={footerLogo} alt="logo" />
      </div>
      <ul className={styles.listContainer}>
        <li className={`${styles.listItem}`}>About Us</li>
        <li className={`${styles.listItem}`}>Games</li>
        <li className={`${styles.listItem} ${styles.active}`}>News</li>
        <li className={`${styles.listItem}`}>Career</li>
        <li className={`${styles.listItem}`}>Contact</li>
      </ul>
    </div>
  );
};
export default HeaderHamburgerMenu;
