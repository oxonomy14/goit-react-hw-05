import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { fetchMovies } from "../../services/tmdb-api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        const data = await fetchMovies(page, abortController.signal);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData(page);
    /* return () => {
      abortController.abort();
    };*/
  }, [page]);

  return (
    <section>
      <div className={"wrapper"}>
        <div className={css.titleBox}>
          <h2 className={css.titleHome}>Trend movies today</h2>
          <p className={css.descriptionHome}>
            Discover the most popular and top-rated movies trending today, Dive
            into the stories everyone is talking about!
          </p>
        </div>
        <MovieList movies={movies} location={location} />
      </div>
    </section>
  );
};

export default HomePage;
