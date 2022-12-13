import styles from "./NewsItem.module.css";
import newsImage from "../../../Assets/images/news-image.png";
import shareIcon from "../../../Assets/images/share-icon.png";

const NewsItem = () => {
  return (
    <div className={styles.container}>
      <img src={newsImage} alt="newsImage" />
      <div className={styles.newsContent}>
        <h3>NEWS 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam
          nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam
          nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam
          nibh mauris, pretium. Lectus magnis lorem massa urna.{" "}
        </p>
        <div className={styles.newsContentBottom}>
          <p>15 mins</p>
          <div className={styles.like}>
            <img src={shareIcon} alt="share-icon" />
            <p>Beğen</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
