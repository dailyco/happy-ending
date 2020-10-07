import React from "react";
import Span from "../Atoms/Span";
import classNames from "classnames";
import TextField from "../Atoms/TextField";
import TextArea from "../Atoms/TextArea";

function Item() {
  return (
    <div className={classNames("Item")}>
      <div>
        <TextField placeHolder="누구" styleName={["s", "dark-gray", "item"]}></TextField>
        <Span styleName={["s", "eclipse", "center"]}>에게</Span>
      </div>
      <TextArea placeHolder="그동안 하지 못했던 말들을 적어보세요.(300자 제한)" styleName={["item"]}></TextArea>
    </div>
  );
}

export default Item;
