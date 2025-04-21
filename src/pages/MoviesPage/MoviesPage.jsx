import css from "./MoviesPages.module.css";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "../../services/tmdb-api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movieSearch, setMovieSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const location = useLocation();

  useEffect(() => {
    if (!query) return; // якщо порожній рядок — не шукаємо
    const getData = async () => {
      try {
        const data = await fetchSearchMovies(query);
        setMovieSearch(data.results);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  const handleSearch = (newQuery) => {
    if (!newQuery) {
      searchParams.delete("query");
      return setSearchParams(searchParams);
    }
    searchParams.set("query", newQuery);

    setSearchParams(searchParams);
  };

  return (
    <section>
      <div className={"container"}>
        <h2>Search movie for enjoy</h2>
        <SearchBar onSearch={handleSearch} />
        <MovieList movies={movieSearch} location={location} />
      </div>
    </section>
  );
};

export default MoviesPage;
