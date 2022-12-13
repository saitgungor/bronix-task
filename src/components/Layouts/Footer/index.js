import styles from "./Footer.module.css";
import footerLogo from "../../../Assets/images/footer-logo.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <img src={footerLogo} alt="logo" />
        <p>All rights reserved.</p>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Menu</div>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Legal</div>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Social</div>
          <ul>
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
