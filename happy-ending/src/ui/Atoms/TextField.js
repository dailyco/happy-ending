import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/TextField.scss";

function TextField({ placeHolder, maxLength, styleName }) {
  return <input type="text" className={classNames("TextField", styleName)} placeholder={placeHolder} maxLength={maxLength}></input>;
}

export default TextField;
