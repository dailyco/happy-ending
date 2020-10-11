import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/TextField.scss";

function TextField({ placeHolder, styleName, ...rest }) {
  return <input type="text" className={classNames("TextField", styleName)} placeholder={placeHolder} {...rest}></input>;
}

export default TextField;
