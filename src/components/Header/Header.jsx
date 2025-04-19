import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import clsx from "clsx";

const Header = () => {
  return (
    <header>
      <div className={clsx(css.header, "wrapper-header")}>
        <div className={css.logo}>
          <p className={css.titleLogo}>Filmoteka Demo Website</p>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
