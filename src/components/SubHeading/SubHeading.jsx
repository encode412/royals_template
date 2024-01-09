import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title, spoon__img_center }) => (
  <div>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className={`spoon__img ${spoon__img_center}`} />
  </div>
);

export default SubHeading;
