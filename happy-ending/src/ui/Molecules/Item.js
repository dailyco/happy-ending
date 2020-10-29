import React from "react";
import Span from "../Atoms/Span";
import Icon from "../Atoms/Icon";
import classNames from "classnames";
import TextField from "../Atoms/TextField";
import TextArea from "../Atoms/TextArea";

import "../../scss/Molecules/Item.scss";

function Item({ item, data, styleName, ...rest }) {
  const { names, onChange, onRemove, icon_data } = data;
  const [ name1, name2 ] = names;
  const { icon_style, ta_style } = styleName;
  const { id, to, message } = item;
  
  return (
    <div className={classNames("Item")}>
      <div>
        <TextField placeHolder="누구" styleName={["s", "message", "item"]} value={to} onChange={onChange} name={name1} id={id} {...rest}></TextField>
        <Span styleName={["s", "eclipse", "center"]}>에게</Span>
      </div>
      <div className={classNames("ItemTextArea")}>
        <TextArea placeHolder="그동안 하지 못했던 말들을 적어보세요.(300자 제한)" styleName={ta_style} value={message} onChange={onChange} name={name2} id={id} {...rest}></TextArea>
        <Icon icon={icon_data.icon_img} alt={icon_data.icon_alt} styleName={icon_style} onClick={onRemove} id={id}></Icon>
      </div>
    </div>
  );
}

export default Item;
