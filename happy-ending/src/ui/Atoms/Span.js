import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/Span.scss";

function Span({ children, className, styleName }) {
  return <span className={classNames("Span", className, styleName)}>{children} </span>;
}

Span.defaultProps = {
  text: "",
  styleName: ["m", "black"],
};

export default Span;
