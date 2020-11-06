import React, { Component } from "react";
import News from "./News";
import NotFound from "../components/NotFound";
import styled from "styled-components";
import { connect } from "react-redux";
import { getNewsByCategory, getNewsByKeyword } from "../actions";
import img from "../assets/technical_difficulties.jpg";
import loadingImg from "../assets/loading.svg";
import Pagination from "./Pagination";

const NewsContainerStyles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-secondary-color);
  border-top: 0.1em solid #e5e5e5;
  padding-bottom: 2em;
  .news__container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-width: 1110px;
    padding-top: 1.5em;
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
  .loading-container {
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

class NewsContainer extends Component {
  // Fetching de la categoría seleccionada o palabra clave ingresada.
  componentDidMount() {
    if (this.props.match.url.includes("categories")) {
      this.props.onGetByCategory(this.props.match.params.id);
    } else if (this.props.match.url.includes("search")) {
      this.props.onGetByKeyword(this.props.match.params.keyword);
    }
  }

  render() {
    const { hasError, isLoading, news, offset, limit } = this.props;
    if (hasError) {
      return (
        <div className="container">
          <h6>Error en la busqueda de noticias.</h6>
        </div>
      );
    } else if (isLoading) {
      return (
        <LoadingStyles>
          <img className="loading-container" src={loadingImg} alt="loading" />
        </LoadingStyles>
      );
    } else {
      return news.length ? (
        <NewsContainerStyles>
          <div className="news__container">
            {news.slice(offset, offset + limit).map((n) => {
              return (
                <News
                  key={n.news_id}
                  img={n.img_url ? n.img_url : img}
                  title={n.title}
                  sourceName={n.source_name}
                  category={n.category ? n.category : "GENERAL"}
                  sourceURL={n.url}
                />
              );
            })}
          </div>
          <Pagination />
        </NewsContainerStyles>
      ) : (
        <NotFound
          messageError={"No se encontraron noticias con la palabra ingresada"}
        />
      );
    }
  }
}

const mapStateToProps = ({ resultNews, requestingError, requestingNews }) => ({
  news: resultNews.news,
  hasError: requestingError.hasError,
  isLoading: requestingNews.inProgress,
  offset: resultNews.offset,
  limit: resultNews.limit
});

const mapDispatchToProps = (dispatch) => ({
  onGetByCategory: (category) => dispatch(getNewsByCategory(category)),
  onGetByKeyword: (keyword) => dispatch(getNewsByKeyword(keyword))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
