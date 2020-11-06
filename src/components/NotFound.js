import React from "react";
import styled from "styled-components";
import imgError from "../assets/cancel.svg";

const NotFoundStyles = styled.div`
  width: 100%;
  min-height: 265px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: 600;
  border-top: 0.08em solid #e5e5e5;
  img {
    width: 3em;
    padding-right: 0.5em;
  }
`;

const NotFound = ({ messageError }) => {
  return (
    <NotFoundStyles>
      <img src={imgError} alt="error" />
      <p>{messageError}</p>
    </NotFoundStyles>
  );
};

export default NotFound;
