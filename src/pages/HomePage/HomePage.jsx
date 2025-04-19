import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchMovies } from "../../services/tmdb-api";
import MovieList from "../../components/MovieList/MovieList";
import Grid from "../../components/Grid/Grid";
import GridItem from "../../components/GridItem/GridItem";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

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
    return () => {
      abortController.abort();
    };
  }, [page]);

  return (
    <section>
      <div className={"wrapper"}>
        <div className={css.titleBox}>
          <h2 className={css.titleHome}>Trend movies today</h2>
          <p className={css.descriptionHome}>
            Discover the most popular and top-rated movies trending today, Dive
            into the stories everyone is talking about!{" "}
          </p>
        </div>

        <Grid>
          {movies.map((movie) => (
            <GridItem key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <MovieList movie={movie} />
              </Link>
            </GridItem>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default HomePage;
