import React from "react";
import Reveal from 'react-reveal/Reveal';
import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";

const Header = () => (
    <Reveal effect="fadeInUp">
  <div className="app__hero-header" id="home">
    <div className="app__hero-overlay">
      <div className="app__hero-content">
    
        <SubHeading
          title="Chase the new flavor"
          spoon__img_center="spoon__img_center"
        />
        <h1>The Key to fine dining</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus et
          vitae architecto eius impedit iusto cum ut cumque necessitatibus? Ea
          alias veritatis
        </p>
        <button type="button" className="custom__button custom__button-hover">
          Explore Menu
        </button>
       
      </div>
    </div>
  </div>
   </Reveal>
);

export default Header;
