import styles from "./Header.module.css";
import logo from "../../../Assets/images/header-logo.png";
import HeaderMenu from "../../HeaderMenu";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt="logo" />
      <HeaderMenu />
    </div>
  );
};
export default Header;
