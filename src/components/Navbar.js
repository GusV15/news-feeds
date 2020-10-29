import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsByCategory, getNewsByDate } from "../actions";
import { categories } from "../data";
import { NavLink } from "react-router-dom";
import { getDate } from "../data/index";
import styled from "styled-components";

const NavbarStyles = styled.nav`
  width: 100%;
  height: 50px;
  .categories-list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
  }
  .categories-list > * {
    width: 20%;
    height: 45px;
    line-height: 45px;
    text-decoration: none;
    color: var(--text-main-color);
    font-size: 0.9em;
    font-weight: 500;
  }
  .categories {
    border-bottom: 2px solid var(--text-main-color);
  }
`;

class Navbar extends Component {
  componentDidMount = () => {
    this.props.onGetByDate(getDate());
  };

  render() {
    const { onGetByCategory, onGetByDate } = this.props;
    return (
      <NavbarStyles>
        <div className="categories-list">
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
