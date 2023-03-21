import React from "react";
import logo from "../../assets/nyt-logo.png";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ searchArticles, setSearchArticles }) => {
  return (
    <header className="header-container" data-test="header-container">
      <Link to="/">
        <h1 className="header-title" data-cy="title">
          NY Times Reader
        </h1>
        <div className="logo-container">
          <img
            className="nyt-logo"
            data-cy="nyt-logo"
            data-testid="nyt-logo"
            src={logo}
            alt="new-york-times logo"
          />
        </div>
      </Link>
      <SearchBar
        searchArticles={searchArticles}
        setSearchArticles={setSearchArticles}
      />
    </header>
  );
};

export default Header;

Header.propTypes = {
  searchArticles: PropTypes.string.isRequired,
  setSearchArticles: PropTypes.func.isRequired,
};
