import React from "react";
import classNames from "classnames";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";
import "../../scss/Molecules/SingleTextFieldSentence.scss";

function SingleTextFieldSentence({ data, styleName }) {
  const { l_text, placeHolder, r_text, tf_data } = data;
  const { bg_style, text_style, tf_style } = styleName;

  return (
    <div className={classNames("SingleTextFieldSentence", bg_style)}>
      <Span styleName={text_style}>{l_text}</Span>
      <TextField placeHolder={placeHolder} styleName={tf_style} value={tf_data.input} onChange={tf_data.onChange} name={tf_data.name}></TextField>
      <Span styleName={text_style}>{r_text}</Span>
    </div>
  );
}

export default SingleTextFieldSentence;
