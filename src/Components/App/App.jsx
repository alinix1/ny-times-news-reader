import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
// import SearchBar from "../SearchBar/SearchBar";
import ArticleList from "../ArticleList/ArticleList";
import About from "../About/About";
import SingleArticle from "../SingleArticle/SingleArticle";
import { fetchArticlesData } from "../../apiCalls";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [error, setError] = useState(null);

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

  if (error) {
    return <p>Something has gone wrong: {error}</p>;
  }

  return (
    <div className="app-container">
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList
              articles={articles}
              setSelectedCategory={setSelectedCategory}
              setArticles={setArticles}
              setError={setError}
            />
          }
        />
        <Route
          path="/:category"
          element={
            <ArticleList
              articles={articles}
              setSelectedCategory={setSelectedCategory}
              setArticles={setArticles}
              setError={setError}
            />
          }
        />
        <Route
          path="/article/:id"
          element={
            <SingleArticle
              articles={articles}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />
        <Route path="/about" element={<About setError={setError} />} />
        <Route
          path="*"
          element={
            <h3 className="page-not-found">This is also an error page</h3>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
