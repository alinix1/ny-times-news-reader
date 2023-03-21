import React from "react";
import "./Articles.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Articles = ({ articles, searchArticles }) => {
  let articleData;
  if (searchArticles !== "") {
    articleData = articles.filter((article) => {
      return article.title.toLowerCase().includes(searchArticles.toLowerCase());
    });
  } else {
    articleData = articles;
  }
  let displayData = articleData.map((article) => {
    return (
      <Card
        id={article.published_date}
        key={article.uri}
        image={article.multimedia[2]?.url || ''}
        title={article.title}
      />
    );
  });

  articleData.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  return (
    <div className="cards" data-cy="cards">
      {displayData}
    </div>
  );
};

export default Articles;

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  searchArticles: PropTypes.string.isRequired,
};
