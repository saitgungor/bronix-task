import styles from "./Pagination.module.css";
import leftArrow from "../../Assets/images/left-arrow.png";
import rightArrow from "../../Assets/images/right-arrow.png";

const Pagination = ({
  activePage,
  lastPage,
  prevPageHandler,
  nextPageHandler,
  goToLastPage,
}) => {
  let first = activePage;
  let second = activePage + 1;
  if (activePage === lastPage) {
    first = lastPage - 2;
    second = lastPage - 1;
  }

  if (activePage === lastPage - 1) {
    first = lastPage - 2;
    second = activePage;
  }

  const onClickHandler = (event) => {
    if (+event.target.innerHTML === activePage) return;
    if (
      (+event.target.innerHTML < activePage && +event.target.innerHTML !== 0) ||
      event.target.id === "left-arrow"
    )
      prevPageHandler();
    if (
      (+event.target.innerHTML > activePage &&
        +event.target.innerHTML !== 42) ||
      event.target.id === "right-arrow"
    )
      nextPageHandler();

    if (+event.target.innerHTML === 42) goToLastPage();
  };

  return (
    <div className={styles.container}>
      <img
        src={leftArrow}
        alt="left-arrow"
        id="left-arrow"
        onClick={onClickHandler}
      />
      <span
        className={`${styles.numbers} ${
          activePage === first ? styles.active : ""
        }`}
        onClick={onClickHandler}
      >
        {first}
      </span>
      <span
        className={`${styles.numbers} ${
          activePage === second ? styles.active : ""
        }  `}
        onClick={onClickHandler}
      >
        {second}
      </span>
      <span className={`${styles.numbers} `}>...</span>
      <span
        className={`${styles.numbers}  ${
          activePage === lastPage ? styles.active : ""
        }`}
        onClick={onClickHandler}
      >
        {lastPage}
      </span>
      <img
        src={rightArrow}
        alt="right-arrow"
        id="right-arrow"
        onClick={onClickHandler}
      />
    </div>
  );
};
export default Pagination;
