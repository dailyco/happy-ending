import React from "react";
import Span from "../Atoms/Span";
import Icon from "../Atoms/Icon";
import classNames from "classnames";
import TextField from "../Atoms/TextField";
import TextArea from "../Atoms/TextArea";

import "../../scss/Molecules/Item.scss";

function Item({ item, data, styleName, ...rest }) {
  const { tf_data, span_data, ta_data, names, onChange, onRemove, icon_data } = data;
  const [ name1, name2 ] = names;
  const { tf_style, span_style, icon_style, ta_style } = styleName;
  const { id, to, message } = item;
  
  return (
    <div className={classNames("Item")}>
      <div>
        <TextField placeHolder={tf_data.placeHolder} styleName={tf_style} value={to} onChange={onChange} name={name1} id={id} {...rest}></TextField>
        <Span styleName={span_style}>{span_data.text}</Span>
        <Icon icon={icon_data.icon_img} alt={icon_data.icon_alt} styleName={icon_style} onClick={onRemove} id={id}></Icon>
      </div>
      <TextArea placeHolder={ta_data.placeHolder} styleName={ta_style} value={message} onChange={onChange} name={name2} id={id} {...rest}></TextArea>
    </div>
  );
}

export default Item;
