import React from "react";
import Decorations from "../Organisms/Decorations";
import Title from "../Molecules/Title";
import Paragraphs from "../Organisms/Paragraphs";
import DetailedButtons from "../Organisms/DetailedButtons";
import classNames from "classnames";

function SeparatedTemplate29({ data, styleName }) {
  const { deco_data, title_data, left_page_date, right_page_data, detailed_buttons_data } = data;

  return (
    <div className={classNames("SeparatedTemplate29")}>
      <Decorations data={deco_data}></Decorations>
      <Title data={title_data}></Title>
      <Paragraphs data={left_page_date}></Paragraphs>
      <Paragraphs data={right_page_data}></Paragraphs>
      <DetailedButtons data={detailed_buttons_data}></DetailedButtons>
    </div>
  );
}

export default SeparatedTemplate29;
