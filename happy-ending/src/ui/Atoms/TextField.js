import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/TextField.scss";

function TextField({ placeHolder, styleName }) {
  return <input type="text" className={classNames("TextField", styleName)} placeholder={placeHolder}></input>;
}

export default TextField;
