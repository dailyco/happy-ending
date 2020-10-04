import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/Button.scss";

function Button({ children, className, styleName, ...rest }) {
  return (
    <button className={classNames("Button", className, styleName)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
