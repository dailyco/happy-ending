import React from "react";
import TextField from "../Atoms/TextField";

function Info() {
  return (
    <>
      <TextField placeHolder="이름" styleName={["m", "davy-gray"]}></TextField>
      <TextField placeHolder="YY" styleName={["xs", "davy-gray"]}></TextField>
      <TextField placeHolder="MM" styleName={["xs", "davy-gray"]}></TextField>
      <TextField placeHolder="DD" styleName={["xs", "davy-gray"]}></TextField>
    </>
  );
}

export default Info;
