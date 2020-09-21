import React from "react";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";

function SingleTextFieldSentence({ text1, text2, placeHolder }) {
  // TODO: create style code
  // const style = ;
  return (
    <div
    // style = {style}
    >
      <Span text={text1}></Span>
      <TextField placeHolder={placeHolder}></TextField>
      <Span text={text2}></Span>
    </div>
  );
}

export default SingleTextFieldSentence;
