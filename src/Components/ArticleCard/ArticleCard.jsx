import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ article, setSelectedCategory }) => {
  const { title, byline, thumbnailImage, id } = article;

  const clickHandler = () => {
    setSelectedCategory(article);
  };

  return (
    <article className="article-container">
      <Link
        to={`/article/${id}`}
        title="Article Details"
        onClick={clickHandler}
      >
        <img
          className="article-img"
          src={thumbnailImage.url}
          alt={thumbnailImage.copyright}
          style={{ width: 150, height: 150 }}
        />
      </Link>
      <h2>{title}</h2>
      <p>{byline}</p>
    </article>
  );
};

export default ArticleCard;
