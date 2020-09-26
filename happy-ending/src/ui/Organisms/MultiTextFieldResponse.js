import React from "react";
import Button from "../Atoms/Button";
import MutiTextFieldSentence from "../Molecules/MutiTextFieldSentence";

function MultiTextFieldResponse({ text1, text2, text3, placeHolder1, placeHolder2 }) {
  return (
    <>
      <MutiTextFieldSentence text1={text1} text2={text2} text3={text3} placeHolder1={placeHolder1} placeHolder2={placeHolder2}></MutiTextFieldSentence>
      <Button text="확인" size="small" color="white"></Button>
    </>
  );
}

export default MultiTextFieldResponse;
