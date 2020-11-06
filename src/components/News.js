import React from "react";
import styled from "styled-components";
import imgError from "../assets/technical_difficulties.jpg";

const NewsStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 1em;
  padding: 0;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #ededf0;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-decoration: none;
  :hover {
    transform: scale(1.01);
  }
  a {
    text-decoration: none;
  }
  .category__container {
    position: absolute;
    background: rgba(252, 75, 99, 0.6);
    color: #ffffff;
    text-transform: uppercase;
    padding: 4px 14px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 14px;
    z-index: 10;
  }
  img {
    height: 200px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #f0f0f0;
    background-size: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .description__container {
    width: 100%;
    height: 200px;
  }
  .description__container .source {
    margin-top: 10px;
    font-weight: 400;
    font-size: 18px;
    color: #82899e;
  }
  .source__container span {
    color: #8289b7;
    font-size: 1.2em;
    margin: 5px 2px;
  }
  p {
    font-size: 1.2em;
    font-weight: 600;
    color: #3b4359;
    margin: 0.7em;
    min-height: 90px;
    text-align: left;
  }
  p:hover {
    color: var(--main-color);
    -webkit-transition: color 150ms ease;
    transition: color 150ms ease;
  }
  @media screen and (max-width: 960px) {
    width: 42%;
  }
  @media screen and (max-width: 600px) {
    width: 60%;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
  @media screen and (max-width: 430px) {
    width: 90%;
  }
`;

const News = ({ category, img, title, sourceName, sourceURL }) => {
  return (
    <NewsStyles>
      <a
        href={sourceURL}
        target="_blank"
        rel="noopener noreferrer"
        alt={sourceURL}
      >
        <div className="category__container">{category}</div>
        <img
          src={img}
          alt={sourceName}
          onError={(e) =>
            e.target.onerror === null && (e.target.src = imgError)
          }
          loading="lazy"
        />
        <div className="description__container">
          <p>{title}</p>
          <div className="source__container">
            <span>{sourceName}</span>
          </div>
        </div>
      </a>
    </NewsStyles>
  );
};

export default News;
