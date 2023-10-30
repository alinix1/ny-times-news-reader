import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/home.jpg";
import usIcon from "../../assets/us.jpg";
import worldIcon from "../../assets/world.jpg";
import techIcon from "../../assets/technology.jpg";
import artsIcon from "../../assets/arts.jpg";
import foodIcon from "../../assets/food.jpg";
import healthIcon from "../../assets/health.jpg";
import aboutIcon from "../../assets/lightbulb.jpg";
import "./NavBar.css";

const NavBar = () => {
  const active = {
    background: "#fff",
  };

  return (
    <nav data-test="nav-bar">
      <NavLink
        data-test="home-tab"
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/"
      >
        <div className="nav-item" data-test="nav-item">
          <img src={homeIcon} alt="home icon" data-test="home-icon" />
          Home
        </div>
      </NavLink>
      <NavLink
        data-test="us-tab"
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/us"
      >
        <div className="nav-item">
          <img src={usIcon} alt="us news icon" data-test="us-icon" />
          US News
        </div>
      </NavLink>
      <NavLink
        data-test="world-tab"
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/world"
      >
        <div className="nav-item">
          <img src={worldIcon} alt="world news icon" data-test="world-icon" />
          World News
        </div>
      </NavLink>
      <NavLink
        data-test="technology-tab"
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/technology"
      >
        <div className="nav-item">
          <img
            src={techIcon}
            alt="technology news icon"
            data-test="technology-icon"
          />
          Technology News
        </div>
      </NavLink>
      <NavLink
        data-test="arts-tab"
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/arts"
      >
        <div className="nav-item">
          <img src={artsIcon} alt="arts news icon" data-test="arts-icon" />
          Arts News
        </div>
      </NavLink>
      <NavLink
        data-test="food-tab"
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/food"
      >
        <div className="nav-item">
          <img src={foodIcon} alt="food news icon" data-test="food-icon" />
          Food News
        </div>
      </NavLink>
      <NavLink
        data-test="health-tab"
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/health"
      >
        <div className="nav-item">
          <img
            src={healthIcon}
            alt="health news icon"
            data-test="health-icon"
          />
          Health News
        </div>
      </NavLink>
      <NavLink
        data-test="about-tab"
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/about"
      >
        <div className="nav-item">
          <img src={aboutIcon} alt="about news icon" data-test="about-icon" />
          About
        </div>
      </NavLink>
    </nav>
  );
};

export default NavBar;
