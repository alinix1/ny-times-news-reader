import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ article, setSelectedCategory }) => {
  const { title, byline, thumbnailImage, publishedDate } = article;

  const clickHandler = () => {
    setSelectedCategory(article);
  };

  return (
    <article
      className="article-container"
      data-test="article-container"
      qa-id="article-container"
    >
      <Link
        to={`/article/${publishedDate}`}
        title="Article Details"
        onClick={clickHandler}
      >
        <img
          className="article-img"
          data-test="article-img"
          qa-id="article-image"
          src={thumbnailImage.url}
          alt={thumbnailImage.copyright}
          style={{ width: 150, height: 150 }}
        />
      </Link>
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
