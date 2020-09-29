import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/Button.scss";

function Button({ text, className, styleName }) {
  return <button className={classNames("Button", className, styleName)}>{text}</button>;
}

Button.defaultProps = {
  text: "",
  styleName: ["m", "black", "translucent"],
};

export default Button;
