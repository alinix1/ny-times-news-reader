import "./About.css";
import newspaper from "../../assets/reading_news.jpg";
import typewriter from "../../assets/typewriter.jpg";
import nyt from "../../assets/nyt.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="sub-about-title u-margin-bottom-small">
            This is not a fake news source
          </h3>
          <p className="about-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Asperiores nulla deserunt voluptatum
            nam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores nulla deserunt voluptatum nam.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={newspaper}
                alt="reading newspaper"
                className="composition-photo composition-photo--p1"
                style={{ width: "300px", height: "250px" }}
              />
              <img
                src={typewriter}
                alt="typwriter"
                className="composition-photo composition-photo--p2"
                style={{ width: "300px", height: "250px" }}
              />
              <img
                src={nyt}
                alt="new york times building"
                className="composition-photo composition-photo--p3"
                style={{ width: "300px", height: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
