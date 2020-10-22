import React from "react";
import classNames from "classnames";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";
import "../../scss/Molecules/SingleTextFieldSentence.scss";

function SingleTextFieldSentence({ data, styleName }) {
  const { l_text, placeHolder, r_text, tf_data } = data;
  const { bg_style, l_text_style, tf_style, r_text_style } = styleName;

  return (
    <div className={classNames("SingleTextFieldSentence", bg_style)}>
      <Span styleName={l_text_style}>{l_text}</Span>
      <TextField placeHolder={placeHolder} styleName={tf_style} value={tf_data.input} onChange={tf_data.onChange} name={tf_data.name}></TextField>
      <Span styleName={r_text_style}>{r_text}</Span>
    </div>
  );
}

export default SingleTextFieldSentence;
