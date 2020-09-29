import React from "react";
import classNames from "classnames";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";
import "../../scss/Molecules/SingleTextFieldSentence.scss";

function SingleTextFieldSentence({ styleName, text1, text2, placeHolder }) {
  return (
    <div className={classNames("SingleTextFieldSentence", styleName)}>
      <Span text={text1}></Span>
      <TextField placeHolder={placeHolder}></TextField>
      <Span text={text2}></Span>
    </div>
  );
}

SingleTextFieldSentence.defaultProps = {
  styleName: ["s", "weak", "dark-greenish-blue"],
  text1: "3일간 여행을 혼자 (",
  text2: ") (으)로 떠난다.",
  placeHolder: "어디",
};

export default SingleTextFieldSentence;
