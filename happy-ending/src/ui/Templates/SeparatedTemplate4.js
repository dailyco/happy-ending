import React from "react";
import P from "../Atoms/P";
import InfoResponse from "../Organisms/InfoResponse";
import classNames from "classnames";

import "../../scss/Templates/SeparatedTemplate4.scss";

function SeparatedTemplate4({ data, styleName }) {
  const { p_data } = data;
  const { template_style, p_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate4", template_style)}>
      <InfoResponse></InfoResponse>
      <P styleName={p_style}>{p_data.text}</P>
    </div>
  );
}

export default SeparatedTemplate4;
