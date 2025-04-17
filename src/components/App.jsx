import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

import "./App.css";

import Header from "./Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
