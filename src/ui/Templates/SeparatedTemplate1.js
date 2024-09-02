import React from "react";
import Img from "../Atoms/Img";
import Span from "../Atoms/Span";
import classNames from "classnames";

import "../../scss/Templates/SeparatedTemplate1.scss";

function SeparatedTemplate1({ data, styleName }) {
  const { img_data, span_data } = data;
  const { img_style, span_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate1")}>
      <Img image={img_data.image} alt={img_data.alt} styleName={img_style}></Img>
      <Span styleName={span_style}>{span_data.text}</Span>
    </div>
  );
}

export default SeparatedTemplate1;
