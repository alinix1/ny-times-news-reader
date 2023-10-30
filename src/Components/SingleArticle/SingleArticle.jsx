import { useParams } from "react-router-dom";
import "./SingleArticle.css";

const SingleArticle = ({ articles }) => {
  const { id } = useParams();

  const article = articles.find((article) => article.publishedDate === id);

  if (!article) {
    return <p>Article not found</p>;
  }

  const { title, abstract, url, byline, largeImage } = article;

  return (
    <section className="article-details-container">
      <img
        className="large-img"
        data-test="single-article-img"
        src={largeImage.url}
        alt={largeImage.copyright}
      />
      <p className="details-caption" data-test="single-article-caption">
        {largeImage.caption}
      </p>
      <h2 className="details-title" data-test="single-article-title">
        {title}
      </h2>
      <p className="details-byline" data-test="single-article-byline">
        {byline}
      </p>
      <p className="details-abstract" data-test="single-article-abstract">
        {abstract}
      </p>
      <p className="link-details" data-test="link-details">
        Read more on{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          The New York Times
        </a>
      </p>
    </section>
  );
};

export default SingleArticle;
