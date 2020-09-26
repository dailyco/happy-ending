import React from "react";
import Button from "../Atoms/Button";
import SingleTextFieldSentence from "../Molecules/SingleTextFieldSentence";

function SingleTextFieldResponse({ text1, text2, placeHolder }) {
  return (
    <>
      <SingleTextFieldSentence text1={text1} text2={text2} placeHolder={placeHolder}></SingleTextFieldSentence>
      <Button text="확인" size="small" color="white"></Button>
    </>
  );
}

export default SingleTextFieldResponse;
