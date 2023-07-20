import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/nyt-logo.png";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header className="header-container">
      <NavLink to="/">
        <h1 className="header-title">NY Times News</h1>
        <div className="logo-container">
          <img className="nyt-logo" src={logo} alt="New York Times logo" />
        </div>
      </NavLink>
      <SearchBar />
    </header>
  );
};

export default Header;
