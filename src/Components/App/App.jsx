import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import ArticleList from "../ArticleList/ArticleList";
import About from "../About/About";
import SingleArticle from "../SingleArticle/SingleArticle";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [error, setError] = useState(null);

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
          element={<SingleArticle selectedCategory={selectedCategory} />}
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
