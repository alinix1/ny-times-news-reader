import React, { useState, useEffect } from 'react'; 
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header'; 
import Articles from '../Articles/Articles';
import SingleArticle from '../SingleArticle/SingleArticle'; 
import { fetchArticlesData } from '../../apiCalls';

const App = () => {

  const [articles, setArticles] = useState([])
  const [searchArticles, setSearchArticles] = useState('')
  const [error, setError] = useState(false)

  // console.log(searchArticles)

  useEffect(() => {
    fetchArticlesData('food')
    .then(data => setArticles(data.results))
    .catch((error) => {
      setError(error)
    })
  }, [])

const findSingleArticle = (date) => {
  return articles.filter(article => {
    return article.published_date === date
  })
}

// const filterArticles = (userSearch) => {
//   return articles.filter(article => {
//     article.title.toLowerCase().includes(userSearch)
//   })

  return (
    <main className="App">
      <Header searchArticles={searchArticles} setSearchArticles={setSearchArticles}/>
      <Switch>
      <Route 
        exact path="/:id"
        render={({ match }) => {
          const selectedArticle = findSingleArticle(match.params.id)
          return <SingleArticle article={selectedArticle}/> 
        }}
        />
      <Route 
      exact path='/'
      render={() => (
        <Articles searchArticles={searchArticles} articles={articles} />
      )}
      />
      </Switch>
    </main>
  );
}

export default App;
