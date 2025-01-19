import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  function customClassName({ isActive }) {
    return "menu__link" + (isActive ? " menu__link_active" : "");
  }

  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>
        Home
      </NavLink>
      <NavLink to="/about-us" className={customClassName}>
        About Us
      </NavLink>
      <NavLink to="/reviews" className={customClassName}>
        Emoji Reviews
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        About Me
      </NavLink>
    </nav>
  );
}

export default NavBar;
