import React from "react";
import classNames from "classnames";

import "../../scss/Atoms/TextField.scss";

function TextField({ placeHolder, maxLength, styleName, ...rest  }) {
  return <input autoComplete="off" type="text" className={classNames("TextField", styleName)} placeholder={placeHolder} maxLength={maxLength} {...rest}></input>;
}

export default TextField;
