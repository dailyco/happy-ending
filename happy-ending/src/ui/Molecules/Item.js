import React from "react";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";

function Item() {
  return (
    <>
      <TextField placeHolder="누구"></TextField>
      <Span text="에게"></Span>
      <TextArea placeHolder="그동안 하지 못했던 말들을 적어보세요.(300자 제한)"></TextArea>
    </>
  );
}

export default Item;
