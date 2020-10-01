import React from "react";
import P from "../Atoms/P";
import H3 from "../Atoms/H3";
import Span from "../Atoms/Span";
import classNames from "classnames";

import "../../scss/Templates/SeperatedTemplate3.scss";

function SeperatedTemplate3({ data, styleName }) {
  const { h3_data, p_data, span_data } = data;
  const { template_style, h3_style, p_style, span_style } = styleName;
  return (
    <div className={classNames("SeperatedTemplate3", template_style)}>
      <H3 styleName={h3_style}>{h3_data.text}</H3>
      <P styleName={p_style}>{p_data.text}</P>
      <Span styleName={span_style}>{span_data.text}</Span>
    </div>
  );
}

export default SeperatedTemplate3;
