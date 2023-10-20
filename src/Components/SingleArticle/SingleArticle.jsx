import "./SingleArticle.css";

const SingleArticle = ({ selectedCategory }) => {
  const { title, abstract, url, byline, largeImage } = selectedCategory;

  return (
    <section className="article-details-container">
      <img
        className="large-img"
        src={largeImage.url}
        alt={largeImage.copyright}
      />
      <p className="caption">{largeImage.caption}</p>
      <h2 className="details-title">{title}</h2>
      <p className="details-byline">{byline}</p>
      <p className="details-abstract">{abstract}</p>
      <p className="link-details">
        Read more on{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          The New York Times
        </a>
      </p>
    </section>
  );
};

export default SingleArticle;
