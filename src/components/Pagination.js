import React from "react";
import styled from "styled-components";
import previousImg from "../assets/previous.svg";
import previousBlockedImg from "../assets/previousBlocked.svg";
import nextImg from "../assets/next.svg";
import nextBlockedImg from "../assets/nextBlocked.svg";
import { connect } from "react-redux";
import { goNextPage, goPreviousPage } from "../actions";

const PaginationStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 1.2em;
  & > * {
    width: 3.7em;
    height: 50px;
    line-height: 50px;
  }
  span {
    width: 2.3em;
    margin: 0 0.3em;
    font-size: 1.4em;
    font-weight: 600;
    background-color: #ffd2d5;
    border-radius: 50%;
  }
  input {
    border: none;
    outline: none;
    border-radius: 0.5em;
  }
`;

const Pagination = ({ currentPage, blocked, onPreviousPage, onNextPage }) => {
  // Función que va a la página anterior y posiciona al inicio de la página.
  const goPreviousPageClick = () => {
    onPreviousPage();
    window.scrollTo(0, 0);
  };
  // Función que va a la página siguiente y posiciona al inicio de la página.
  const goNextPageClick = () => {
    onNextPage();
    window.scrollTo(0, 0);
  };

  return (
    <PaginationStyled blocked={blocked}>
      <input
        type="image"
        disabled={blocked === "previous"}
        onClick={goPreviousPageClick}
        src={blocked === "previous" ? previousBlockedImg : previousImg}
        alt="previous"
      />
      <span>{currentPage}</span>
      <input
        type="image"
        disabled={blocked === "next"}
        onClick={goNextPageClick}
        src={blocked === "next" ? nextBlockedImg : nextImg}
        alt="next"
      />
    </PaginationStyled>
  );
};

const mapStateToProps = ({ resultNews }) => ({
  currentPage: resultNews.currentPage,
  blocked: resultNews.blocked
});

const mapDispatchToProps = (dispatch) => ({
  onPreviousPage: () => dispatch(goPreviousPage()),
  onNextPage: (category) => dispatch(goNextPage(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
