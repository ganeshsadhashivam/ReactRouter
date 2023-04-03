import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey" };
        }}
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/login">login</NavLink>
    </nav>
  );
};

export default Navbar;
