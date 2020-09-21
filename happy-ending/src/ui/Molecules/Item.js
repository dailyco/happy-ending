import React from "react";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";

function Item() {
  // TODO: create style code
  // const style = ;

  return (
    <div
    // style = {style}
    >
      <TextField placeHolder="누구"></TextField>
      <Span text="에게"></Span>
      <TextField placeHolder="그동안 하지 못했던 말들을 적어보세요.(300자 제한)"></TextField>
    </div>
  );
}

export default Item;
