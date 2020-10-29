import React from "react";
import Img from "../Atoms/Img";
import Paragraph from "../Molecules/Paragraph";
import classNames from "classnames";

function Paragraphs({ data, styleName }) {
  const { img, paragraph1, paragraph2, paragraph3 } = data;

  return (
    <div className={classNames("Paragraphs")}>
      <Img image={img}></Img>
      <Paragraph data={paragraph1}></Paragraph>
      <Paragraph data={paragraph2}></Paragraph>
      <Paragraph data={paragraph3}></Paragraph>
    </div>
  );
}

export default Paragraphs;
