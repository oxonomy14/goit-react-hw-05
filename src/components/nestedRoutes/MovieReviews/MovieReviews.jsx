import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsByMovieId } from "../../../services/tmdb-api";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await fetchReviewsByMovieId(movieId);
        setReviews(data.results);
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      <h2>MovieReviews</h2>
      {reviews.length > 0
        ? reviews.map((item) => (
            <div key={item.id}>
              <div>
                <p>Date: {new Date(item.updated_at).toLocaleDateString()}</p>
                <p>
                  <strong>{item.author}</strong>
                </p>
              </div>
              <div>{item.content}</div>
            </div>
          ))
        : "No have anymore comments yet"}
    </>
  );
};

export default MovieReviews;
