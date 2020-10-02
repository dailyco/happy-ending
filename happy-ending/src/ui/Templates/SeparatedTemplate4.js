import React from "react";
import P from "../Atoms/P";
import InfoResponse from "../Organisms/InfoResponse";
import classNames from "classnames";

import "../../scss/Templates/SeparatedTemplate4.scss";

function SeparatedTemplate4({ data, styleName }) {
  const { p_data } = data;
  const { p_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate4")}>
      <div className={classNames("script")}>
        <P styleName={p_style}>{p_data.text}</P>
      </div>
      <div className={classNames("InfoResponse")}>
        <InfoResponse></InfoResponse>
      </div>
    </div>
  );
}

export default SeparatedTemplate4;
