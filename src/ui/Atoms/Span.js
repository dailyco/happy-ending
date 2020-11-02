import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/Span.scss";

function Span({ children, styleName }) {
  return <span className={classNames("Span", styleName)}>{children} </span>;
}

export default Span;
