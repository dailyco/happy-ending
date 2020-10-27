import React from "react";
import Span from "../Atoms/Span";
import classNames from "classnames";
import TextField from "../Atoms/TextField";
import TextArea from "../Atoms/TextArea";

function Item({ item, names, onChange, ...rest }) {
  const { id, to, message } = item;
  const [ name1, name2 ] = names;
  
  return (
    <div className={classNames("Item")}>
      <div>
        <TextField placeHolder="누구" styleName={["s", "message", "item"]} value={to} onChange={onChange} name={name1} id={id} {...rest}></TextField>
        <Span styleName={["s", "eclipse", "center"]}>에게</Span>
      </div>
      <TextArea placeHolder="그동안 하지 못했던 말들을 적어보세요.(300자 제한)" styleName={["item"]} value={message} onChange={onChange} name={name2} id={id} {...rest}></TextArea>
    </div>
  );
}

export default Item;
