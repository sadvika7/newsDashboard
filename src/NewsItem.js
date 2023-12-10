import React from "react";

const NewsItem = ({ article }) => {
  return (
    <div className="news-item" style={{ border: "1px solid grey" }}>
      <img src={article.urlToImage} width={"350px"} />

      <h2>{article.title}</h2>

      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More...
      </a>
      <div
        style={{
          display: "inline",
          position: "sticky",
          bottom: 0,
        }}
      >
        <small>Published At </small>
        <small>{article.publishedAt}</small>
      </div>
    </div>
  );
};

export default NewsItem;
