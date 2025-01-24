import "./Review.css";
import { useNavigate, useParams } from "react-router-dom";

function Review({ reviews }) {
  const params = useParams();
  const id = params.reviewId - 1;
  const navigate = useNavigate();

  return (
    // Review is still a separate page component and therefore it's connected to the App parent, not Reviews - for navigational reasons
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">
            Final rating: {reviews[id]?.rating}/5
          </p>
          <button type="button" onClick={() => navigate(-1)}>
            Back to the review list
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
