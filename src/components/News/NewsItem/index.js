import styles from "./NewsItem.module.css";
import shareIcon from "../../../Assets/images/share-icon.png";

const NewsItem = ({ data }) => {
  const { image, created, name, id } = data;
  const createdDate = created.split("").splice(0, 10).join("");
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="newsImage" />
      <div className={styles.newsContent}>
        <h3>{`${name} ${id}`}</h3>
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
          <p>{createdDate}</p>
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
