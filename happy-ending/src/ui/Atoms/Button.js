import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/Button.scss";

function Button({ children, styleName }) {
  return <button className={classNames("Button", styleName)}>{children}</button>;
}

Button.defaultProps = {
  text: "",
  styleName: ["m", "white"],
};

export default Button;
