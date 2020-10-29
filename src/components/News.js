import React from "react";
import imgError from "../assets/technical_difficulties.jpg";

const News = ({ img, title, sourceName }) => {
  return (
    <div className="news-container">
      <img
        src={img}
        alt={sourceName}
        onError={(e) => e.target.onerror === null && (e.target.src = imgError)}
        loading="lazy"
      />
      <p>{title}</p>
      <h4>{sourceName}</h4>
      <button>Ver más</button>
    </div>
  );
};

export default News;
