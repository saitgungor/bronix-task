import styles from "./Footer.module.css";
import footerLogo from "../../../Assets/images/footer-logo.png";
import { useState } from "react";

const Footer = () => {
  const [showFooterMenu1, setFooterShowMenu1] = useState(false);
  const [showFooterMenu2, setFooterShowMenu2] = useState(false);
  const [showFooterMenu3, setFooterShowMenu3] = useState(false);
  const showMenuHandler = (event) => {
    if (event.target.innerHTML === "Menu") setFooterShowMenu1((prev) => !prev);
    if (event.target.innerHTML === "Legal") setFooterShowMenu2((prev) => !prev);
    if (event.target.innerHTML === "Social")
      setFooterShowMenu3((prev) => !prev);
  };
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <img src={footerLogo} alt="logo" />
        <p>All rights reserved.</p>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerCol} onClick={showMenuHandler}>
          <div className={styles.footerColTitle}>Menu</div>
          <ul className={`${showFooterMenu1 ? styles.show : styles.hide}`}>
            <li>About Us</li>
            <li>News</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.footerCol} onClick={showMenuHandler}>
          <div className={styles.footerColTitle}>Legal</div>
          <ul className={`${showFooterMenu2 ? styles.show : styles.hide}`}>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.footerCol} onClick={showMenuHandler}>
          <div className={styles.footerColTitle}>Social</div>
          <ul className={`${showFooterMenu3 ? styles.show : styles.hide}`}>
            <li>Discord</li>
            <li>Linkedin</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
