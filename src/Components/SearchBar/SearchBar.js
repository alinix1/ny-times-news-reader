import React from 'react';
import './SearchBar.css';

const SearchBar = ({searchArticles, setSearchArticles}) => {

    const clearInputs = () => {
        setSearchArticles('')
    }

    return (
    <form className='form-container'>
        <input 
        type='text' 
        value={searchArticles}
        className='search' 
        data-cy='search'
        placeholder='Search for Articles'
        onChange={(event) => setSearchArticles(event.target.value)
        }
        />
        <button className='home-button' data-cy='home-button' onClick={() => clearInputs()}>home</button>
    </form>
    )
}

export default SearchBar