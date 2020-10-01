import React from "react";
import Span from "../Atoms/Span";
import TextArea from "../Atoms/TextArea";
import TextField from "../Atoms/TextField";
import "../../scss/Molecules/GraveStone.scss";

function GraveStone({ data, styleName }) {
  const { tf_data, sp1_data, sp2_data, ta_data } = data;
  const { tf_style, sp1_style, sp2_style, ta_style } = styleName;

  return (
    <div className={"GraveStone"}>
      <TextField placeHolder={tf_data} styleName={tf_style}></TextField>
      <Span styleName={sp1_style}>{sp1_data}</Span>
      <Span styleName={sp2_style}>{sp2_data.name}</Span>
      <TextArea placeHolder={ta_data} styleName={ta_style}></TextArea>
    </div>
  );
}

export default GraveStone;
