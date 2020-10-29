import React from "react";
import News from "./News";
import { connect } from "react-redux";
import loadingImg from "../assets/loading.svg";

const Search = ({ news, hasError, isLoading }) => {
  if (hasError) {
    return (
      <div className="container">
        <h6>Error en la busqueda de noticias.</h6>
      </div>
    );
  }

  if (isLoading) {
    return <img className="loading-container" src={loadingImg} alt="loading" />;
  }

  return (
    <div className="categories-container">
      {console.log(news)}
      {news.map((n) => (
        <News
          key={n.news_id}
          img={n.img_url}
          title={n.title}
          sourceName={n.source_name}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  news: state.news,
  hasError: state.requestingError,
  isLoading: state.requestingNews
});

export default connect(mapStateToProps)(Search);
