import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef1} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            veritatis rem provident aliquam nihil recusandae tempore, sint
            suscipit,
          </p>
        </div>
        <p className="p__opensans">
          minima deleniti minus eius enim, magnam animi quasi dolorum
          repudiandae temporibus necessitatibus!
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Jephthah Smith</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
