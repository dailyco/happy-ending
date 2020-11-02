import React from "react";
import classNames from "classnames";
import Span from "../Atoms/Span";
import TextField from "../Atoms/TextField";
import "../../scss/Molecules/MultiTextFieldSentence.scss";

function MultiTextFieldSentence({ data, styleName }) {
  const { l_text, ph1, m_text, ph2, r_text, tf1_data, tf2_data } = data;
  const { input1, name1, onChange1 } = tf1_data;	
  const { input2, name2, onChange2 } = tf2_data;
  const { bg_style, text_style, tf_style } = styleName;

  return (
    <div className={classNames("MultiTextFieldSentence", bg_style)}>
      <Span styleName={text_style}>{l_text}</Span>
      <TextField placeHolder={ph1} styleName={tf_style} value={input1} onChange={onChange1} name={name1}></TextField>
      <Span styleName={text_style}>{m_text}</Span>
      <TextField placeHolder={ph2} styleName={tf_style} value={input2} onChange={onChange2} name={name2}></TextField>
      <Span styleName={text_style}>{r_text}</Span>
    </div>
  );
}

export default MultiTextFieldSentence;
