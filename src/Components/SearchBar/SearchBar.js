import React from 'react';
import PropTypes from 'prop-types';
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

SearchBar.propTypes = {
    searchArticles: PropTypes.string.isRequired,
    setSearchArticles: PropTypes.func.isRequired
  }