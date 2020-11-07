import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsByKeyword } from "../actions";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imgNewsRoom from "../assets/news-room.png";
import imgSearch from "../assets/search.svg";
import imgSearchBlocked from "../assets/searchBlocked.svg";

const HeaderStyles = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 105px;
  height: auto;
  background-color: var(--bg-main-color);
  border-bottom: 0.1em solid #e5e5e5;
  .logo__container {
    margin-left: 4em;
  }
  .logo__container h2 {
    font-size: 1.05em;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--title-color);
  }
  .logo__container img {
    width: 3em;
    height: 50px;
  }
  .search__container {
    display: flex;
    margin-right: 4em;
  }
  .search__container input[type="text"] {
    min-width: 12%;
    height: 40px;
    line-height: 40px;
    font-size: 0.9em;
    margin-right: 1.7em;
    padding-left: 1em;
    border: 1px solid #c4c4c4;
    outline: none;
    border-radius: 7px;
  }
  .search__container input[type="text"]:focus {
    border: 1px solid var(--main-color);
  }
  .search__container input[type="image"] {
    width: 40px;
    height: 40px;
    margin-left: -15px;
    border: none;
    outline: none;
  }
  @media screen and (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo__container,
    .search__container {
      margin: 1em 0;
    }
  }
`;

class Header extends Component {
  state = {
    keyword: ""
  };

  setKeyword = ({ target: { value: keyword } }) => this.setState({ keyword });

  searchNews = (e) => {
    e.preventDefault();
    this.props.onGetByKeyword(this.state.keyword);
  };

  render() {
    const { keyword } = this.state;
    return (
      <HeaderStyles>
        <div className="logo__container">
          <a href="/" alt="news-room">
            <img src={imgNewsRoom} alt="news-room" />
          </a>
          <h2>News Feeds</h2>
        </div>
        <div className="search__container">
          <form onSubmit={this.searchNews}>
            <input
              type="text"
              placeholder="Buscar noticias"
              value={keyword}
              onChange={this.setKeyword}
            />
          </form>
          <Link
          to={`/search/${keyword}`}
          onClick={() => this.props.onGetByKeyword(keyword)}
          >
            <input
              onClick={this.searchNews}
              type="image"
              src={keyword ? imgSearch : imgSearchBlocked}
              disabled={keyword ? false : true}
              alt="search-news"
            />
          </Link>
        </div>
      </HeaderStyles>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetByKeyword: (keyword) => dispatch(getNewsByKeyword(keyword))
});

export default connect(null, mapDispatchToProps)(Header);
