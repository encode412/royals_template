import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__content">
    <div className="app__aboutus-overlay flex__overlay">
      <img src={images.about} alt="Royals" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi rerum
          aut, similique magni quos molestiae ad numquam minus laudantium optio
          ullam architecto dolor!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi rerum
          aut, similique magni quos molestiae ad numquam minus laudantium optio
          ullam architecto dolor!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
    </div>
  </div>
);

export default AboutUs;
