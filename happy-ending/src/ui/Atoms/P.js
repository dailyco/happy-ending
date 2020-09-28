import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/P.scss";

function P({ text, className, styleName }) {
  return <p className={classNames("P", className, styleName)}>{text}</p>;
}

P.defaultProps = {
  text: "",
  styleName: ["black", "left"],
};

export default P;
