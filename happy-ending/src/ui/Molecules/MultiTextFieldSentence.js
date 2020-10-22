import React from "react";
import classNames from "classnames";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";
import "../../scss/Molecules/MultiTextFieldSentence.scss";

function MultiTextFieldSentence({ data, styleName }) {
  const { l_text, ph1, m_text, ph2, r_text } = data;
  const { bg_style, l_text_style, tf1_style, m_text_style, tf2_style, r_text_style } = styleName;

  return (
    <div className={classNames("MultiTextFieldSentence", bg_style)}>
      <Span styleName={l_text_style}>{l_text}</Span>
      <TextField placeHolder={ph1} styleName={tf1_style}></TextField>
      <Span styleName={m_text_style}>{m_text}</Span>
      <TextField placeHolder={ph2} styleName={tf2_style}></TextField>
      <Span styleName={r_text_style}>{r_text}</Span>
    </div>
  );
}

export default MultiTextFieldSentence;
