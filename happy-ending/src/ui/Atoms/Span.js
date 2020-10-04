import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/Span.scss";

function Span({ children, className, styleName }) {
  return <span className={classNames("Span", className, styleName)}>{children} </span>;
}

Span.defaultProps = {
  text: "탭하여 다음 페이지로 넘어가기",
  styleName: ["m", "black"],
};

export default Span;
