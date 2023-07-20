import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { fetchArticlesData } from "../../apiCalls";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchArticlesData("food")
      .then((data) => console.log("DATA: ", data.results))
      .then((data) => setArticles(data.results))
      .catch((error) => {
        setError("Sorry, we couldn't get the data. Please start over.");
      });
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
    </div>
  );
};

export default App;
