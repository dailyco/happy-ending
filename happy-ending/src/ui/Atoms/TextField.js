import React from "react";
import "../../scss/Atoms/TextField.scss";

function TextField({ text, placeHolder, size, color }) {
  return (
    <input type="text" placeholder={placeHolder} className={`TextField ${size} ${color}`}>
      {text}
    </input>
  );
}

TextField.defaultProps = {
  text: "",
  placeHolder: "내용을 입력해주세요",
  size: "medium",
  color: "gray",
};

export default TextField;
