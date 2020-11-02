import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/P.scss";

function P({ children, styleName }) {
  return <p className={classNames("P", styleName)}>{children}</p>;
}

export default P;
