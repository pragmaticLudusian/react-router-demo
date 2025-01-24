import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  // const navigate = useNavigate();

  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Page Not Found!
      </h3>
      <p className="not-found__text">
        Ruh roh! There's nothing here... Sorry. 🐶
      </p>
      <Link to="/">Take me /, country roads</Link>
    </div>
  );
}

export default PageNotFound;
