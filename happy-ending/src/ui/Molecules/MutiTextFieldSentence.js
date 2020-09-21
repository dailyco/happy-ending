import React from "react";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";

function MutiTextFieldSentence({ text1, text2, text3, placeHolder1, placeHolder2 }) {
  // TODO: create style code
  // const style = ;
  return (
    <div
    // style = {style}
    >
      <Span text={text1}></Span>
      <TextField placeHolder={placeHolder1}></TextField>
      <Span text={text2}></Span>
      <TextField placeHolder={placeHolder2}></TextField>
      <Span text={text3}></Span>
    </div>
  );
}

export default MutiTextFieldSentence;
