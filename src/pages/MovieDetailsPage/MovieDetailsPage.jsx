import { useEffect, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { fetchMoviesById } from "../../services/tmdb-api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState({});
  console.log(movieId);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMoviesById(movieId);
        setMovieItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  //const genresName = movieItem.genres.map((item) => item.name).join("|");

  // console.log(genresName);

  return (
    <section>
      <div className="wrapper">
        <h2>{movieItem.title}</h2>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
              alt=""
            />
          </div>
          <div>
            <p>Homepage: {movieItem.homepage}</p>
            <p>Budget: {movieItem.budget}$</p>
            <p>Genres: {movieItem.genres?.map((g) => g.name).join(" | ")}</p>
            <p>Description: {movieItem.overview}</p>
          </div>
        </div>
        <nav>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet />
      </div>
    </section>
  );
};

export default MovieDetailsPage;
