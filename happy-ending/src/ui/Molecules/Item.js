import React from "react";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";

function Item() {
  return (
    <>
      <TextField placeHolder="누구"></TextField>
      <Span styleName={["s", "eclipse", "center"]}>에게</Span>
      <TextArea placeHolder="그동안 하지 못했던 말들을 적어보세요.(300자 제한)" styleName={["item"]}></TextArea>
    </>
  );
}

export default Item;
