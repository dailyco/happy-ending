import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/P.scss";

function P({ children, className, styleName }) {
  return <p className={classNames("P", className, styleName)}>{children}</p>;
}

P.defaultProps = {
  text: "",
  styleName: ["black", "left"],
};

export default P;
