import { useEffect } from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import ArticleCard from "../ArticleCard/ArticleCard";
import { fetchArticlesData } from "../../apiCalls";
import loading from "../../assets/loading.jpg";
import "./ArticleList.css";

const ArticleList = ({
  articles,
  setSelectedCategory,
  setArticles,
  setError,
}) => {
  const { category } = useParams();

  useEffect(() => {
    const currentCategory = category ? category : "home";
    if (category) {
      setArticles(null);
    }

    fetchArticlesData(currentCategory)
      .then((articles) => {
        const sortedArticles = articles.slice().sort((a, b) => {
          const dateA = new Date(a.publishedDate);
          const dateB = new Date(b.publishedDate);
          return dateB - dateA;
        });
        setArticles(sortedArticles);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [category, setArticles, setError]);

  const makeArticles = () =>
    articles
      ? articles?.map((article, index) => (
          <ArticleCard
            key={index}
            article={article}
            setSelectedCategory={setSelectedCategory}
          />
        ))
      : null;
  return !articles ? (
    <img className="loading" data-test="loading" src={loading} alt="loading" />
  ) : (
    <main
      className="articleList-container"
      data-test="article-list"
      qa-id="article-list"
    >
      {makeArticles()}
    </main>
  );
};

export default ArticleList;

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  setSelectedCategory: PropTypes.func.isRequired,
  setArticles: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
