import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../../Assets/images/header-logo.png";
import hamburgerMenu from "../../../Assets/images/hamburger-menu.png";
import closeIcon from "../../../Assets/images/close-icon.png";
import HeaderMenu from "../../HeaderMenu";
import HeaderHamburgerMenu from "../../HeaderHamburgerMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <img src={logo} className={styles.logo} alt="logo" />
      <HeaderMenu />
      <img
        className={styles.hamburgerMenu}
        src={!showMenu ? hamburgerMenu : closeIcon}
        alt="hamburger-menu"
        onClick={() => setShowMenu((prev) => !prev)}
      />
      {showMenu && <HeaderHamburgerMenu />}
    </div>
  );
};
export default Header;
