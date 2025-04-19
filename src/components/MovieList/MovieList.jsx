import css from "./MovieList.module.css";

const MovieList = ({ movie }) => {
  return (
    <div className={css["last-movie-box"]}>
      <img
        className={css["last-movie-small-img"]}
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.original_title}
        title={movie.original_title}
      />
      <div className={css["last-movie-small-img-dr"]} title="Release Date">
        <p className={css["last-movie-dr-txt"]}>{movie.release_date}</p>
      </div>
      <div className={css["last-movie-small-img-rt"]} title="Vote Average">
        <p className={css["last-movie-rt-txt"]}>
          {Math.round(movie.vote_average * 10)}
          <sup>%</sup>
        </p>
      </div>

      <div className={css["last-movie-descr"]}>
        <h3 className={css["last-movie-descr-subtitle"]}>
          {movie.original_title}
        </h3>

        <p className={css["last-movie-descr-txt"]}></p>
      </div>
    </div>
  );
};

export default MovieList;
