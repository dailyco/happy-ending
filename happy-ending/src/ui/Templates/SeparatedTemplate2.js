import React from "react";

import P from "../Atoms/P";
import Span from "../Atoms/Span";
import classNames from "classnames";

import "../../scss/Templates/SeparatedTemplate2.scss";

function SeparatedTemplate2({ data, styleName }) {
  const { p_data, span_data } = data;
  const { p_style, span_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate2")}>
      <P styleName={p_style}>{p_data.text}</P>
      <Span styleName={span_style}>{span_data.text}</Span>
    </div>
  );
}

export default SeparatedTemplate2;
