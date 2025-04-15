import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loading, page, setPage }) => {
  return (
    <>
      <button
        className={css.button}
        type="button"
        onClick={() => setPage(page + 1)}
      >
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
