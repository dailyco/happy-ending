import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/TextArea.scss";

function TextArea({ placeHolder, styleName, ...rest }) {
  return <textarea autoComplete="off" placeholder={placeHolder} className={classNames("TextArea", styleName)} {...rest}></textarea>;
}

export default TextArea;
