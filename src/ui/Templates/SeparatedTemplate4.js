import React from "react";
import P from "../Atoms/P";
import classNames from "classnames";
import InfoResponse from "../Organisms/InfoResponse";

import "../../scss/Templates/SeparatedTemplate4.scss";

function SeparatedTemplate4({ data, styleName }) {
  const { p_data, irpns_data } = data;
  const { tp_style, p_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate4", tp_style)}>
      <section className={classNames("script")}>
        <P styleName={p_style}>{p_data.text}</P>
      </section>
      <section className={classNames("InfoResponse")}>
        <InfoResponse data={irpns_data}></InfoResponse>
      </section>
    </div>
  );
}

export default SeparatedTemplate4;
