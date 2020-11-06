import React from "react";
import "../styles.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Routes from "../Routes";
import Footer from "./Footer";
import styled from "styled-components";

const WrapperStyles = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
`;
const MainStyles = styled.div`
  text-align: center;
`;
const Main = () => {
  return (
    <WrapperStyles>
      <MainStyles>
        <Header />
        <Navbar />
        <Routes />
        <Footer />
      </MainStyles>
    </WrapperStyles>
  );
};

export default Main;
