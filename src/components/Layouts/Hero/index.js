import Header from "../Header";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Header />
      <div className={styles.heroTextContainer}>
        <h2 className={styles.title}>News</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          feugiat iaculis porta. Fusce arcu sem, varius at purus at,
          scelerisque.
        </p>
      </div>
    </div>
  );
};
export default Hero;
