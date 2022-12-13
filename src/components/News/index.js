import styles from "./News.module.css";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div className={styles.newsContainer}>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
};
export default News;
