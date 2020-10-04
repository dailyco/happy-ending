import React from "react";
import H3 from "../Atoms/H3";
import Span from "../Atoms/Span";

import "../../scss/Templates/SeparatedTemplate25.scss";

function SeparatedTemplate25({ data, styleName }) {
  const { h3_data, span1_data, span2_data, span3_data, span4_data } = data;
  const { h3_style, span1_style, span2_style, span3_style, span4_style } = styleName;

  return (
    <div className={"SeparatedTemplate25"}>
      <H3 styleName={h3_style}>{h3_data}</H3>
      <Span styleName={span1_style}>{span1_data}</Span>
      <Span styleName={span2_style}>{span2_data}</Span>
      <Span styleName={span3_style}>{span3_data}</Span>
      <Span styleName={span4_style}>{span4_data}</Span>
    </div>
  );
}

export default SeparatedTemplate25;
