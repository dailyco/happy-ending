import React from "react";
import Img from "../Atoms/Img";
import Span from "../Atoms/Span";
import classNames from "classnames";
import "../../scss/Templates/SeperatedTemplate1.scss";

function SeperatedTemplate1({ data, styleName }) {
  const { img_data, span_data } = data;
  const { template_style, img_style, span_style } = styleName;
  return (
    <div className={classNames("SeperatedTemplate1", template_style)}>
      <Img image={img_data.image} alt={img_data.alt} styleName={img_style}></Img>
      <Span styleName={span_style}>{span_data.text}</Span>
    </div>
  );
}

export default SeperatedTemplate1;
