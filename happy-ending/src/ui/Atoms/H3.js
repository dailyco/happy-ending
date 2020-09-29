import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/H3.scss";

function H3({ children, styleName }) {
  return <h3 className={classNames("H3", styleName)}>{children}</h3>;
}

H3.defaultProps = {
  styleName: ["black", "left"],
};

export default H3;
