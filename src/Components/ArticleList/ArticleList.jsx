import { useEffect } from "react";
import { useParams } from "react-router";
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
      .then((articles) => setArticles(articles))
      .catch((error) => {
        setError(error.message);
      });
  }, [category, setArticles, setError]);

  const makeArticles = () =>
    articles
      ? articles.map((article, index) => (
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
