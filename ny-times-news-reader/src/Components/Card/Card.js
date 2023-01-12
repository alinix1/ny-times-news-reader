import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({image, title, id}) => {
    return (
        <Link to={`/${id}`} >
            <div className='card-container'>
                <div className='card'>
                    <img className='article-img' src={image} alt='image of an article'/>
                    <h2 className='article-title'>{title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Card