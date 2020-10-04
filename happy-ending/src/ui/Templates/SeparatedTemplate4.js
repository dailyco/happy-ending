import React from "react";
import P from "../Atoms/P";
import classNames from "classnames";
import InfoResponse from "../Organisms/InfoResponse";

import "../../scss/Templates/SeparatedTemplate4.scss";

function SeparatedTemplate4({ data, styleName }) {
  const { p_data } = data;
  const { p_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate4")}>
      <section className={classNames("script")}>
        <P styleName={p_style}>{p_data.text}</P>
      </section>
      <section className={classNames("InfoResponse")}>
        <InfoResponse></InfoResponse>
      </section>
    </div>
  );
}

export default SeparatedTemplate4;
