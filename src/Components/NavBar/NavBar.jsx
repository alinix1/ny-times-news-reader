import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const active = {
    background: "#fff",
  };

  return (
    <nav>
      <NavLink style={({ isActive }) => (isActive ? active : undefined)} to="/">
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/us"
      >
        US News
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/world"
      >
        World News
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/technology"
      >
        Technology News
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/arts"
      >
        Arts News
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/food"
      >
        Food News
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/health"
      >
        Health News
      </NavLink>
    </nav>
  );
};

export default NavBar;
