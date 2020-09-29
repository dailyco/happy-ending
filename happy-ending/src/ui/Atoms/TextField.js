import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/TextField.scss";

function TextField({ placeHolder, className, styleName }) {
  return <input type="text" className={classNames("TextField", className, styleName)} placeholder={placeHolder}></input>;
}

TextField.defaultProps = {
  text: "",
  placeHolder: "내용을 입력해주세요",
  styleName: ["m", "dark-gray"],
};

export default TextField;
