import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import clsx from "clsx";

const Header = () => {
  return (
    <header>
      <div className={clsx(css.header, "container-header")}>
        <div className={css.logo}>
          <p className={css.titleLogo}>Filmoteka</p>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
