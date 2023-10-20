import "./SingleArticle.css";

const SingleArticle = ({ selectedCategory }) => {
  const { title, abstract, url, byline, multimedia } = selectedCategory;

  return (
    <section className="article-details-container">
      <img className="large-img" src={multimedia} alt="news article" />

      <h2>{title}</h2>
      <p>{byline}</p>
      <p>{abstract}</p>
      <p>
        Read more on <a href={url}>The New York Times</a>
      </p>
    </section>
  );
};

export default SingleArticle;
