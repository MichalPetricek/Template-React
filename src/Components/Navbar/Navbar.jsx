import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        Template
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item active">
            <NavLink className="nav-links" to="/" exact>
                Home
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-links" to="/about" exact>
                About
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-links" to="/contact" exact>
                Contact Us
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-links" to="/login" exact>
                Sign in
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-links" to="/register" exact>
                Sign up
            </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
