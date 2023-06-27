import React from "react";
import sj from "../assets/SJ.png";
import apartment from "../assets/apartment.png";
import shoe11 from "../assets/shoe11.png"
import salad3 from "../assets/salad3.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Section1 = () => {

  return (
    <div className="projects-page">
      <img src={salad3} alt='salad3' className="salad3"/>
      <h1 className="section-title">Projects</h1>
      <div className="work-list">
        <div className="work">
          <img src={sj} alt="slam-a-jamz" className="s1image" />
          <div className="layer">
            <h3>Slam-A-Jamz</h3>
            <p>
              What is Slam A Jamz? Have you ever wanted to track your favorite
              artist and the venues they are preforming at or at or as an artist
              want more control and exposure over the promotion of your music?
              Ruby on Rails, React, Fullstack Application
            </p>
            <a href="/slamajamz">
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
        <div className="work">
          <img src={apartment} alt="apartment app image" className="s1image" />
          <div className="layer">
            <h3>Apartment App</h3>
            <p>
              Want to expand you real estate buisness? Need more control over
              the management of your properties? Apartment App provides all the
              tools nessary for you to make informed decsions when finding leads
              for new housing markets. Ruby on Rails, Fullstack Application
            </p>
            <a href="#">
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
        <div className="work">
          <img src={shoe11} alt="shoe11" className="s1image" />
          <div className="layer">
            <h2>GracefulGents</h2>
            <p>
              Welcome to our exclusive collection of classy shoes, where style
              meets sophistication. Discover a world of exceptional
              craftsmanship and impeccable design that transcends trends and
              stands the test of time.
            </p>
            <a href="/shoeapp">
              <FontAwesomeIcon icon={faLink} className="link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
