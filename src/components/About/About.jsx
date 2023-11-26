import newspaper from "../../assets/reading_news.jpg";
import typewriter from "../../assets/typewriter.jpg";
import nyt from "../../assets/nyt.jpg";
import "../../sassStyles/_variables.scss";
import "./About.scss";

const About = () => {
  return (
    <section className="section-about" data-test="section-about">
      <h1 className="about-title" data-test="about-title" qa-id="about-title">
        About
      </h1>
      <div className="u-center-text u-margin-bottom-big">
        <h2
          className="heading-secondary"
          data-test="heading-secondary"
          qa-id="heading-secondary"
        >
          This is not a fake news source
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <p
            className="about-paragraph"
            data-test="about-paragraph"
            qa-id="about-paragraph"
          >
            This is a news application that provides a news feed with a default
            "home" page along with tabs for other news sections or categories to
            choose from. Visit NY Times News to see a list of the top news
            stories from the NYT Top Stories API. The user can click the image
            of each article to be taken to the article on the real NYT website
            (of course you will need to subscribe in order to access it).
          </p>
        </div>

        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={newspaper}
              alt="reading newspaper"
              className="composition-photo composition-photo-p1"
              data-test="reading-newspaper"
              qa-id="reading-newspaper"
              style={{ width: "300px", height: "250px" }}
            />
            <img
              src={typewriter}
              alt="typewriter"
              className="composition-photo composition-photo-p2"
              data-test="typewriter"
              qa-id="typewriter"
              style={{ width: "300px", height: "250px" }}
            />
            <img
              src={nyt}
              alt="new york times headquarters"
              className="composition-photo composition-photo-p3"
              data-test="new york times headquarters"
              qa-id="new york times headquarter"
              style={{ width: "300px", height: "250px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
