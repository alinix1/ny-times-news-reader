import { useParams, useNavigate } from "react-router-dom";
import { formatDate } from "../../utilities";
import PropTypes from "prop-types";
import "../../sassStyles/_variables.scss";
import "./SingleArticle.scss";
import { HiOutlineArrowLeft } from "react-icons/hi";
const SingleArticle = ({ articles, selectedCategory }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articles?.find((article) => article.publishedDate === id);

  const { title, abstract, url, byline, largeImage, publishedDate } =
    selectedCategory;

  return !article ? (
    <p>Article not found</p>
  ) : (
    <section className="article-details-container">
      <div className="back-arrow-container">
        <HiOutlineArrowLeft
          className="back-arrow"
          data-test="back-arrow"
          qa-id="back-arrow"
          onClick={() => {
            navigate(-1);
          }}
        />
        <img
          className="large-img"
          data-test="single-article-img"
          qa-id="detail-article-img"
          src={largeImage?.url}
          alt={largeImage?.copyright}
        />
      </div>
      <p className="details-caption" data-test="single-article-caption">
        {largeImage?.caption}
      </p>
      <h2
        className="details-title"
        data-test="single-article-title"
        qa-id="detail-article-title"
      >
        {title}
      </h2>
      <p
        className="details-byline"
        data-test="single-article-byline"
        qa-id="detail-article-byline"
      >
        {byline}
      </p>
      <p
        className="details-abstract"
        data-test="single-article-abstract"
        qa-id="detail-article-abstract"
      >
        {abstract}
      </p>
      <p
        className="details-article-date"
        data-test="single-article-date"
        qa-id="detail-article-date"
      >
        {formatDate(publishedDate)}
      </p>
      <p className="link-details" data-test="link-details" qa-id="link-details">
        Read more on{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          The New York Times
        </a>
      </p>
    </section>
  );
};

export default SingleArticle;

SingleArticle.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};
