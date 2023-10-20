import "./ArticleCard.css";

const ArticleCard = ({ article, setSelectedCategory }) => {
  const { title, byline, thumbnailImage } = article;

  const clickHandler = () => {
    setSelectedCategory(article);
  };

  return (
    <article className="article-container">
      <button title="Article Details" onClick={clickHandler}>
        <img
          className="article-img"
          src={thumbnailImage.url}
          alt={thumbnailImage.copyright}
          style={{ width: 150, height: 150 }}
        />
      </button>
      <h2>{title}</h2>
      <p>{byline}</p>
    </article>
  );
};

export default ArticleCard;
