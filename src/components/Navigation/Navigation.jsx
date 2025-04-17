import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.activeLink);
};

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
