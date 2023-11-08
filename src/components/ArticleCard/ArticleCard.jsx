import { useNavigate } from "react-router-dom";
import "./ArticleCard.css";
import PropTypes from "prop-types";
import "../../sassStyles/_variables.scss";
import "./ArticleCard.scss";

const ArticleCard = ({ article, setSelectedCategory }) => {
  const { title, byline, thumbnailImage, publishedDate } = article;
  const navigate = useNavigate();

  const clickHandler = () => {
    setSelectedCategory(article);
    navigate(`/article/${publishedDate}`);
  };

  return (
    <article
      className="article-container"
      data-test="article-container"
      qa-id="article-container"
    >
      <div
        onClick={clickHandler}
        style={{ cursor: "pointer" }}
        title="Article Details"
      >
        <img
          className="article-img"
          data-test="article-img"
          qa-id="article-image"
          src={thumbnailImage?.url}
          alt={thumbnailImage?.copyright}
          style={{ width: 150, height: 150 }}
        />
      </div>
      <h2 data-test="article-title" qa-id="article-title">
        {title}
      </h2>
      <p data-test="article-byline" qa-id="article-byline">
        {byline}
      </p>
    </article>
  );
};

export default ArticleCard;

ArticleCard.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
  article: PropTypes.shape({
    abstract: PropTypes.string,
    byline: PropTypes.string,
    largeImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    publishedDate: PropTypes.string,
    section: PropTypes.string,
    thumbnailImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
