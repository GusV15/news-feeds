import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getNewsByDate } from "../actions";
import { getDate } from "../data";
import News from "./News";
import img from "../assets/technical_difficulties.jpg";
import loadingImg from "../assets/loading.svg";

const HomeStyles = styled.section`
  background-color: #f5f5f5;
  border-top: 0.1em solid #e5e5e5;
  padding-bottom: 2em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  .news__container {
    max-width: 1108px;
    margin: auto;
    padding-top: 1.5em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`;

const LoadingStyles = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 1.5em;
  min-height: 320px;
  background-color: var(--bg-secondary-color);
  border-top: 0.1em solid #e5e5e5;
  .loading__container {
    display: block;
    width: 6em;
    height: 6em;
    margin: 1em auto;
    -webkit-animation: 1s rotar linear infinite;
    animation: 1s rotar linear infinite;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  @keyframes rotar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotar {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

class Home extends Component {
  componentDidMount = () => {
    this.props.onGetByDate(getDate());
  };

  render() {
    const { news, hasError, isLoading } = this.props;
    if (hasError) {
      return (
        <div className="container">
          <h6>Error en la busqueda de noticias.</h6>
        </div>
      );
    } else if (isLoading) {
      return (
        <LoadingStyles>
          <img className="loading__container" src={loadingImg} alt="loading" />
        </LoadingStyles>
      );
    }
    return (
      <HomeStyles>
        <div className="news__container">
          {news.slice(0, 10).map((n) => {
            return (
              <News
                key={n.news_id}
                img={n.img_url ? n.img_url : img}
                title={n.title}
                sourceName={n.source_name}
                category={n.category ? n.category : "HOME"}
                sourceURL={n.url}
              />
            );
          })}
        </div>
      </HomeStyles>
    );
  }
}

const mapStateToProps = ({ resultNews, requestingError, requestingNews }) => ({
  news: resultNews.news,
  hasError: requestingError.hasError,
  isLoading: requestingNews.inProgress
});

const mapDispatchToProps = (dispatch) => ({
  onGetByDate: (category) => dispatch(getNewsByDate(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
