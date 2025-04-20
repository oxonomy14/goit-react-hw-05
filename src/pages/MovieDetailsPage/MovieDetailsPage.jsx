import { useEffect, useState, useRef } from "react";
import css from "./MovieDetailsPage.module.css";
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import { fetchMoviesById } from "../../services/tmdb-api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState({});
  //console.log(movieId);

  const location = useLocation();
  //console.log(location);
  const backLink = useRef(location.state ?? "/movies");

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

  return (
    <section>
      <div className="wrapper">
        <Link to={backLink.current}>Go Back</Link>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
              alt=""
            />
          </div>
          <div>
            <h2>{movieItem.title}</h2>
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
