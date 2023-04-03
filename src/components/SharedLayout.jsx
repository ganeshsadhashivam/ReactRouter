import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      {/* <h2>Home</h2> */}
      {/* <Link to="/about" className="btn">
        About
      </Link> */}
      {/* <section className="section"> */}
      <Outlet />
      {/* </section> */}
    </>
  );
};

export default Home;
