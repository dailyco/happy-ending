import React from "react";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";

function SingleTextFieldSentence({ size, opacity, color, text1, text2, placeHolder }) {
  return (
    <div className={`SingleTextFieldSentence ${size} ${opacity} ${color}`}>
      <Span text={text1}></Span>
      <TextField placeHolder={placeHolder}></TextField>
      <Span text={text2}></Span>
    </div>
  );
}

export default SingleTextFieldSentence;
