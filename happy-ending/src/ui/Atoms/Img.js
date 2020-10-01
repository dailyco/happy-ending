import React from "react";
import classNames from "classnames";

import "../../scss/Atoms/Img.scss";

function Img({ image, alt, styleName }) {
  return <img src={image} alt={alt} className={classNames("Img", styleName)}></img>;
}

export default Img;
