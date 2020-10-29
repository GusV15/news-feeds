import React from "react";
import News from "./News";
import img from "../assets/technical_difficulties.jpg";

const Categories = ({ news }) => {
  return (
    <div className="categories-container">
      {news.map((n) => (
        <News
          key={n.news_id}
          img={n.img_url ? n.img_url : img}
          title={n.title}
          sourceName={n.source_name}
        />
      ))}
    </div>
  );
};

export default Categories;
