import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/H3.scss";

function H3({ text, className, styleName }) {
  return <h3 className={classNames("H3", className, styleName)}>{text}</h3>;
}

H3.defaultProps = {
  text: "",
  styleName: ["black", "left"],
};

export default H3;
