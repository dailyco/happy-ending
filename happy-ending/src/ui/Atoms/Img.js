import React from "react";
import classNames from "classnames";

import "../../scss/Atoms/Img.scss";

function Img({ image, alt, styleName, ...rest }) {
  return <img src={image} alt={alt} className={classNames("Img", styleName)} {...rest}></img>;
}

export default Img;
