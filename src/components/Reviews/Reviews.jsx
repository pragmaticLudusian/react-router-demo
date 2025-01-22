import "./Reviews.css";
import { Link } from "react-router-dom";

function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <ul className="reviews__list">
        {reviews &&
          reviews.map((review) => {
            return (
              <li className="reviews__item" key={review.id}>
                <Link to={`${review.id}`}>{review.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Reviews;
