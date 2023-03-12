import React from 'react';
import './SingleArticle.css';

const SingleArticle = ({article}) => {
    
    return (
        <div className='single-article-container'>
            <img src={article[0].multimedia[1].url} className='single-article-img' data-cy='single-article-img'></img>
            <h1 className='single-article-title' data-cy='single-article-title'>{article[0].title}</h1>
            <p className='single-article-byline' data-cy='single-article-byline'>{article[0].byline}</p>
            <p className='single-article-abstract' data-cy='single-article-abstract'>{article[0].abstract}</p>
            <a href={article[0].url} target="_blank" className='button' data-cy='button'>Full Article</a>
        </div>
    )
}

export default SingleArticle