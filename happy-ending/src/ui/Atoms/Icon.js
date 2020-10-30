import React from "react";
import classNames from "classnames";

import "../../scss/Atoms/Icon.scss";

function Icon({ icon, alt, styleName, ...rest }) {
  return <img src={icon} alt={alt} className={classNames("Icon", styleName)} {...rest}></img>;
}

export default Icon;
