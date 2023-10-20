import logo from "../../assets/nyt-logo.jpg";
import timesSquareVideo from "../../assets/times_square_nyc.mp4";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={timesSquareVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="header-title" style={{ fontSize: "40px" }}>
          NY Times News
        </h1>
        <div className="logo-container">
          <img className="nyt-logo" src={logo} alt="New York Times logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
