import css from "./NotFoundPage.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <h2>Not Found Page. Go back to Home Page in 3 sec ....</h2>
    </>
  );
};

export default NotFoundPage;
