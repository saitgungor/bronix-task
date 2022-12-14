import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const [nextNews, setNextNews] = useState([]);

  const observer = useRef();
  const lastCharacterRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && activePage !== PAGE_COUNT) {
          getCharacters(nextPageArray);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, activePage]
  );

  const getCharacters = async (array, prev) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/[${array}]`
      );
      const data = await response.json();

      if (!response.ok || data.length === 0) {
        throw new Error("Something went wrong!", response.status);
      }
      let dataPage = Math.ceil(data[0].id / 20);
      if (prev) setNews(data);
      activePage === dataPage ? setNews(data) : setNextNews(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  const prevPageArray = Array.from(
    { length: 20 },
    (_, i) => (activePage - 2) * 20 + i + 1
  );
  const currentPageArray = Array.from(
    { length: 20 },
    (_, i) => (activePage - 1) * 20 + i + 1
  );
  const nextPageArray = Array.from(
    { length: 20 },
    (_, i) => activePage * 20 + i + 1
  );

  const lastPageArray = Array.from(
    { length: 20 },
    (_, i) => (PAGE_COUNT - 1) * 20 + i + 1
  ).filter((number) => number <= 826);

  useEffect(() => {
    if (nextNews.length === 0) {
      getCharacters(currentPageArray);
    } else if (activePage === PAGE_COUNT) {
      getCharacters(lastPageArray);
    }
  }, [activePage]);

  const prevPageHandler = () => {
    if (activePage === 1) return;
    setActivePage((prev) => prev - 1);
    getCharacters(prevPageArray, true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const nextPageHandler = () => {
    if (activePage === 42) return;
    setActivePage((prev) => prev + 1);
    setNews(nextNews);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const goToLastPage = () => {
    setActivePage(PAGE_COUNT);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.newsContainer}>
      {error && <ErrorComp />}
      {isLoading ? (
        <Loading />
      ) : (
        news.map((newsItem, index) => {
          if (news.length === index + 1) {
            return (
              <div ref={lastCharacterRef} key={newsItem.id}>
                <NewsItem data={newsItem} />
              </div>
            );
          } else {
            return <NewsItem data={newsItem} key={newsItem.id} />;
          }
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
