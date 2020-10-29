import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsByKeyword } from "../actions";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imgNewsRoom from "../assets/news-room.png";
import imgSearch from "../assets/search.svg";

const HeaderStyles = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 105px;
  background-color: var(--bg-main-color);
  border-bottom: 0.1em solid #e5e5e5;
  .logo-container {
    margin-left: 4em;
  }
  .logo-container h2 {
    font-size: 1.05em;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--title-color);
  }
  .logo-container img {
    width: 3em;
    height: 50px;
  }
  .search-container {
    margin-right: 4em;
  }
  .search-container input {
    min-width: 12%;
    height: 40px;
    font-size: 0.9em;
    margin-right: 1.7em;
    padding-left: 1em;
    border: 1px solid #c4c4c4;
    outline: none;
    border-radius: 7px;
  }
  .search-container img {
    width: 28px;
    height: 28px;
    margin-top: 6px;
  }
`;

class Header extends Component {
  state = {
    keyword: ""
  };

  setKeyword = ({ target: { value: keyword } }) => this.setState({ keyword });

  searchNews = () => this.props.onGetByKeyword(this.state.keyword);

  render() {
    const { keyword } = this.state;
    return (
      <HeaderStyles>
        <div className="logo-container">
          <img src={imgNewsRoom} alt="news-room" />
          <h2>News Feeds</h2>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar"
            value={keyword}
            onChange={this.setKeyword}
          />
          <Link to={`/search/${keyword}`} onClick={this.searchNews}>
            <img src={imgSearch} alt="search-news" />
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
