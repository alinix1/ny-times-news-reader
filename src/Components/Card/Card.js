import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ image, title, id }) => {
  return (
    <Link to={`/${id}`}>
      <div className="card-container" data-testid="card-container" role ='card' data-cy="card-container">
        <div className="card">
          <img
            className="article-img"
            data-cy="article-img"
            src={image}
            alt="image of an article"
          />
          <h2 className="article-title" data-cy="article-title">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
