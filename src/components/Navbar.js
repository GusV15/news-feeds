import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsByCategory, getNewsByDate } from "../actions";
import { categories } from "../data";
import { NavLink } from "react-router-dom";
import { getDate } from "../data/index";
import styled from "styled-components";

const NavbarStyles = styled.section`
  width: 100%;
  min-height: 65px;
  .categories__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
  }
  .categories__list > * {
    width: 12%;
    height: 65px;
    line-height: 65px;
    text-decoration: none;
    color: var(--text-main-color);
    font-size: 0.9em;
    font-weight: 500;
  }
  .categories {
    color: var(--main-color);
  }
  .categories__list > *:hover {
    transform: scale(1.02);
    transition-duration: 0.2s;
  }
  @media screen and (max-width: 930px) {
    .categories__list > * {
      width: 25%;
    }
  }
  @media screen and (max-width: 670px) {
    .categories__list {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
    }
  }
  @media screen and (max-width: 500px) {
    .categories__list {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
    }
    .categories__list > * {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 35px;
    }
  }
`;

class Navbar extends Component {
  render() {
    const { onGetByCategory, onGetByDate } = this.props;
    return (
      <NavbarStyles>
        <div className="categories__list">
          <NavLink
            exact
            to="/"
            onClick={() => onGetByDate(getDate())}
            activeClassName="categories"
          >
            Home
          </NavLink>
          {categories.map(({ id, category }) => (
            <NavLink
              exact
              to={`/categories/${id}`}
              key={id}
              activeClassName="categories"
              onClick={() => onGetByCategory(id)}
            >
              {category}
            </NavLink>
          ))}
        </div>
      </NavbarStyles>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetByCategory: (category) => dispatch(getNewsByCategory(category)),
  onGetByDate: (category) => dispatch(getNewsByDate(category))
});

export default connect(null, mapDispatchToProps)(Navbar);
