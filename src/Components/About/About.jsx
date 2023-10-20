import "./About.css";
import newspaper from "../../assets/reading_news.jpg";
import typewriter from "../../assets/typewriter.jpg";
import nyt from "../../assets/nyt.jpg";

const About = () => {
  return (
    <section class="section-about">
      <h1 className="about-title">About</h1>
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">This is not a fake news source</h2>
      </div>

      <div class="row">
        <div class="col-1-of-2">
          <p class="about-paragraph">
            This is a news application that provides a news feed with a default
            "home" page along with tabs for other news sections or categories to
            choose from. Visit NY Times News to see a list of the top news
            stories from the NYT Top Stories API. The user can click the image
            of each article to be taken to the article on the real NYT website
            (of course you will need to subscribe in order to access it).
          </p>
        </div>

        <div class="col-1-of-2">
          <div class="composition">
            <img
              src={newspaper}
              alt="reading newspaper"
              class="composition-photo composition-photo-p1"
              style={{ width: "300px", height: "250px" }}
            />
            <img
              src={typewriter}
              alt="typewriter"
              class="composition-photo composition-photo-p2"
              style={{ width: "300px", height: "250px" }}
            />
            <img
              src={nyt}
              alt="new york times headquarters"
              class="composition-photo composition-photo-p3"
              style={{ width: "300px", height: "250px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// <div className="about-container">

// <div className="row">
//   <div className="col-1-of-2">
//     <h1 className="about-title">About</h1>
//     <h3 className="sub-about-title">This is not a fake news source</h3>
//     <p className="about-paragraph">
//       This is a news application that provides a news feed with a default
//       "home" page along with tabs for other news sections or categories to
//       choose from. Visit NY Times News to see a list of the top news stories
//       from the NYT Top Stories API. The user can click the image of each
//       article to be taken to the article on the real NYT website (of course
//       you will need to subscribe in order to access it).
//     </p>
//     <div className="col-1-of-2">
//       <div className="composition">
//         <img
//           src={newspaper}
//           alt="reading newspaper"
//           className="composition-photo composition-photo--p1"
//           style={{ width: "300px", height: "250px" }}
//         />
//         <img
//           src={typewriter}
//           alt="typwriter"
//           className="composition-photo composition-photo--p2"
//           style={{ width: "300px", height: "250px" }}
//         />
//         <img
//           src={nyt}
//           alt="new york times building"
//           className="composition-photo composition-photo--p3"
//           style={{ width: "300px", height: "250px" }}
//         />
//       </div>
//     </div>
//   </div>
// </div>
// </div>
