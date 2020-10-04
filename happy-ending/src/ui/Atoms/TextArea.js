import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/TextArea.scss";

function TextArea({ placeHolder, styleName }) {
  return <textarea placeholder={placeHolder} className={classNames("TextArea", styleName)}></textarea>;
}

export default TextArea;
