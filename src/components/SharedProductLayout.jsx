import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <h2>products</h2>
      <Outlet />
    </>
  );
};

export default Home;
