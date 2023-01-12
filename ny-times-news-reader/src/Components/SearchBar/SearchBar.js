import React from 'react'
import './SearchBar.css'

const SearchBar = ({searchArticles, setSearchArticles}) => {

    return (
    <form className='form-container'>
        <input 
        type='text' 
        value={searchArticles}
        className='search' 
        placeholder='Search for Articles'
        onChange={(event) => setSearchArticles(event.target.value)
        }
        />
    </form>
    )
}

export default SearchBar