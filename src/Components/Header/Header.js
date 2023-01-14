import React from 'react';
import logo from '../../assets/nyt-logo.png';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Header = ({searchArticles, setSearchArticles}) => {

    return (
        <header className='header-container'>
            <Link to='/'>
                <h1 className='header-title'>NY Times Reader</h1>
              <div className='logo-container'>
                <img className='nyt-logo' src={logo} alt='new-york-times logo' />
              </div>
            </Link>
            <SearchBar searchArticles={searchArticles} setSearchArticles={setSearchArticles} />
        </header>
    )
}

export default Header