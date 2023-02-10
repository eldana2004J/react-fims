import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar_box">
      <nav className="navbar">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie">Movie</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
