import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import ErrorComp from "../ErrorComp";
import styles from "./News.module.css";
import NewsItem from "./NewsItem";
import Pagination from "../Pagination";

const News = () => {
  const PAGE_COUNT = Math.ceil(826 / 20);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [news, setNews] = useState([]);

  const getCharacters = async (array) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/[${array}]`
      );

      const data = await response.json();

      if (!response.ok || data.length === 0) {
        throw new Error("Something went wrong!", response.status);
      }

      setNews(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  const a = Array.from({ length: 20 }, (_, i) => (i + 1) * activePage);

  useEffect(() => {
    getCharacters(a);
  }, []);

  const prevPageHandler = () => {
    if (activePage === 1) return;
    setActivePage(activePage - 1);
  };

  const nextPageHandler = () => {
    if (activePage === 42) return;
    setActivePage(activePage + 1);
  };

  const goToLastPage = () => {
    setActivePage(PAGE_COUNT);
  };

  return (
    <div className={styles.newsContainer}>
      {error && <ErrorComp />}
      {isLoading ? (
        <Loading />
      ) : (
        news.map((news) => {
          return <NewsItem data={news} key={news.id} />;
        })
      )}
      <Pagination
        activePage={activePage}
        lastPage={PAGE_COUNT}
        prevPageHandler={prevPageHandler}
        nextPageHandler={nextPageHandler}
        goToLastPage={goToLastPage}
      />
    </div>
  );
};
export default News;
