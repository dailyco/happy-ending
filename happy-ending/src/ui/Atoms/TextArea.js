import React from "react";
import classNames from "classnames";
import "../../scss/Atoms/TextArea.scss";

function TextArea({ placeHolder, styleName }) {
  return <textarea placeholder={placeHolder} className={classNames("TextArea", styleName)}></textarea>;
}

TextArea.defaultProps = {
  placeHolder = "그동안 하지 못했던 말들을 적어보세요.(300자 제한)",
  styleName: ["item"],
};

export default TextArea;
