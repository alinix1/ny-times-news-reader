import React, { useState, useEffect } from 'react'; 
import { Route, Switch } from 'react-router-dom';
import './App.css';
import loading from '../../assets/loading-icon.png';
import Header from '../Header/Header'; 
import Articles from '../Articles/Articles';
import SingleArticle from '../SingleArticle/SingleArticle'; 
import { fetchArticlesData } from '../../apiCalls';
import ErrorContainer from '../ErrorContainer/ErrorContainer';

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
        exact path='*' element={<ErrorContainer />}/>
      </Switch>
      {error && (
        <h4 className='error-container'>{error}</h4>
        )}
      {!error && !articles.length && (
        <div>
          <img src={loading} alt='loading' className='loading-img' />
        </div>
      )}
    </main>
  );
}

//  <Route path='*' element={
//           <div>
//             <h1 className='not-found'>404: Not found</h1>
//             <button className='search-page' onClick={() => navigate('/')} >Back to Headlines</button>
//           </div>
//         } />

export default App;
