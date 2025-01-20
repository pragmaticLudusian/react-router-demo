import { Link, Outlet } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <p>You can find out more information about our site here.</p>
      <ul>
        <li>
          <Link to="site-mission">Site Mission</Link>
        </li>
        <li>
          <Link to="site-history">Site History</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUs;
