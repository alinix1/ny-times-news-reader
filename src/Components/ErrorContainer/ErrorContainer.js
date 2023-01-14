import React from 'react'
import logo from '../../assets/nyt-logo.png';
import { Link } from 'react-router-dom';

const ErrorContainer = () => {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>
            <h1 className='header-title'>NY Times Reader</h1>
              <div className='logo-container'>
                <img className='nyt-logo' src={logo} alt='new-york-times logo' />
              </div>
            </Link>
        </div>
    )
}



export default ErrorContainer;