import React from "react";
import "./SingleArticle.css";
import PropTypes from "prop-types";

const SingleArticle = ({ article }) => {
  if (!article[0]) {
    return <h3 className="page-does-not-exist">404: Page does not exist</h3>;
  } else {
    return (
      <div className="single-article-container">
        <img
          src={article[0].multimedia[1].url}
          className="single-article-img"
          data-cy="single-article-img"
          alt="single article"
        ></img>
        <h1 className="single-article-title" data-testid="single-article-title" data-cy="single-article-title">
        <h1 className="single-article-title" data-testid='single-article-title' data-cy="single-article-title">
          {article[0].title}
        </h1>
        <p className="single-article-byline" data-cy="single-article-byline">
          {article[0].byline}
        </p>
        <p
          className="single-article-abstract"
          data-cy="single-article-abstract"
        >
          {article[0].abstract}
        </p>
        <a
          href={article[0].url}
          target="_blank"
           rel="noreferrer"
          className="button"
          data-cy="button"
        >
          Full Article
        </a>
      </div>
    );
  }
};

export default SingleArticle;

SingleArticle.propTypes = {
  article: PropTypes.array,
};
