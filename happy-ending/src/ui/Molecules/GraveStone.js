import React from "react";
import Span from "../Atoms/Span";
import TextArea from "../Atoms/TextArea";
import TextField from "../Atoms/TextField";
import "../../scss/Molecules/GraveStone.scss";

function GraveStone({ data, styleName }) {
  const { tf_data, sp1_data, sp2_data, inputs, names, onChange } = data;
  const { alias, lastWord } = inputs;
  const { tf_style, sp1_style, sp2_style, ta_style } = styleName;

  return (
    <div className={"GraveStone"}>
      <section className={"which-people"}>
        <TextField placeHolder={tf_data} styleName={tf_style} value={alias} name={names[0]} onChange={onChange}></TextField>
        <Span styleName={sp1_style}>{sp1_data}</Span>
      </section>
      <Span styleName={sp2_style}>{sp2_data.name}</Span>
      <TextArea
        placeHolder="(남기고 싶은 한마디를 적어주세요. &#13;&#10; Ex. 세상에 온기를 채우고 떠나다.)"
        styleName={ta_style}
        value={lastWord}
        name={names[1]}
        onChange={onChange}
      ></TextArea>
    </div>
  );
}

export default GraveStone;
