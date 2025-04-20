import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastByMovieId } from "../../../services/tmdb-api";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await fetchCastByMovieId(movieId);
        setCast(data.cast);
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <>
      <h2>MovieCast</h2>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <div>
              <div>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                      : defaultImg
                  }
                  alt={item.name}
                  width={250}
                />
              </div>
              <div>
                {item.name} as <strong>{item.character}</strong>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
