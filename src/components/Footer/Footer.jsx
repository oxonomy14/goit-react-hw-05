import css from "./Footer.module.css";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer>
      <div className={clsx(css.footer, "wrapper-footer")}>
        <div className={css.logo}>
          <p className={css.titleLogo}>Filmoteka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
