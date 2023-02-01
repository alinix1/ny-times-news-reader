import React, { useState, useEffect } from 'react'; 
import { Route, Switch } from 'react-router-dom';
import './App.css';
import loading from '../../assets/loading-icon.png';
import Header from '../Header/Header'; 
import Articles from '../Articles/Articles';
import SingleArticle from '../SingleArticle/SingleArticle'; 
import { fetchArticlesData } from '../../apiCalls';

const App = () => {

  const [articles, setArticles] = useState([])
  const [searchArticles, setSearchArticles] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchArticlesData('food')
    .then(data => setArticles(data.results))
    .catch((error) => {
      setError('Sorry, we couldn\t get the data. Please start over.')
    })
  }, [])

const findSingleArticle = (date) => {
  return articles.filter(article => {
    return article.published_date === date
  })
}

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
      <Route 
      path='*'
      render={() => (
        <h3 className='page-not-found'>This is also an error page</h3>
      )}
      />
      </Switch>
      {error && (
        <h4 className='error-container'>{error}</h4>
      )}
      {!error && !articles.length && (
        <div>
          <img src={loading} alt='loading' className='loading-img' />
          <h4>Loading...</h4>
        </div>
      )}
    </main>
  );
}

export default App;
