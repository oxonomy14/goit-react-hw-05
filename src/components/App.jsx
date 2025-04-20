import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
//import MoviesPage from "../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Footer from "./Footer/Footer";
//import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
//import MovieCast from "../components/nestedRoutes/MovieCast/MovieCast";
//import MovieReviews from "../components/nestedRoutes/MovieReviews/MovieReviews";

import "./App.css";
import clsx from "clsx";

import Header from "./Header/Header";

import { lazy, Suspense } from "react";

const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() =>
  import("../components/nestedRoutes/MovieCast/MovieCast")
);
const MovieReviews = lazy(() =>
  import("../components/nestedRoutes/MovieReviews/MovieReviews")
);

const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <div className={clsx("container")}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
