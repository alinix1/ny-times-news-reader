import React from 'react'
import './Articles.css'
import Card from '../Card/Card'

const Articles =({articles, searchArticles}) => {
    let articleData;
    if (searchArticles !== "") {

       articleData = articles.filter(article => {
            return article.title.toLowerCase().includes(searchArticles.toLowerCase())

 
       })
    
    } else {
        articleData = articles
    }
    let displayData = articleData.map(article => {

        return (
            <Card 
                id={article.published_date}
                key={article.uri}
                image={article.multimedia[2].url}
                title={article.title}
            />
        )
    })
    
    let sortedArticles = articleData.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })
    return (
        <div className='cards'>{displayData}</div>
    )
}

export default Articles