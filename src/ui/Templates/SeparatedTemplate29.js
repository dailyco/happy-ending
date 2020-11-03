import React from "react";
import Decorations from "../Organisms/Decorations";
import Title from "../Molecules/Title";
import Paragraphs from "../Organisms/Paragraphs";
import DetailedButtons from "../Organisms/DetailedButtons";
import classNames from "classnames";

import "../../scss/Templates/SeparatedTemplate29.scss";

function SeparatedTemplate29({ data, styleName }) {
  const { deco_data, title_data, l_paras_data, r_paras_data, detailed_buttons_data } = data;
  const { deco_style, title_style, l_paras_style, r_paras_style, detailed_buttons_style } = styleName;

  return (
    <div className={classNames("SeparatedTemplate29")}>
      <Decorations data={deco_data} styleName={deco_style}></Decorations>
      <Title data={title_data} styleName={title_style}></Title>
      <section className="contents">
        <Paragraphs data={l_paras_data} styleName={l_paras_style}></Paragraphs>
        <Paragraphs data={r_paras_data} styleName={r_paras_style}></Paragraphs>
        <DetailedButtons data={detailed_buttons_data} styleName={detailed_buttons_style}></DetailedButtons>
      </section>
    </div>
  );
}

export default SeparatedTemplate29;
