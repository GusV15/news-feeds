import React from "react";
import "../styles.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Routes from "../Routes";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Navbar />
      <Routes />
    </div>
  );
};

export default Main;
