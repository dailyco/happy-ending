import React from "react";
import P from "../Atoms/P";
import H3 from "../Atoms/H3";
import "../../scss/Organisms/D_Question.scss";

function Dquestion({ data, styleName }) {
  const { h3_data, p_data } = data;
  const { h3_style, p_style } = styleName;

  return (
    <>
      <H3 styleName={h3_style}>D-{h3_data.day}</H3>
      <P styleName={p_style}>{p_data.question}</P>
    </>
  );
}

export default Dquestion;
