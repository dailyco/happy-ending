import React from "react";
import P from "../Atoms/P";
import Span from "../Atoms/Span";
import classNames from "classnames";

import "../../scss/Templates/SeperatedTemplate2.scss";

function SeperatedTemplate2({ data, styleName }) {
  const { p_data, span_data } = data;
  const { template_style, p_style, span_style } = styleName;
  return (
    <div className={classNames("SeperatedTemplate2", template_style)}>
      <P styleName={p_style}>{p_data.text}</P>
      <Span styleName={span_style}>{span_data.text}</Span>
    </div>
  );
}

export default SeperatedTemplate2;
