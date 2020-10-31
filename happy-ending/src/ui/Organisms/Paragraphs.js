import React from "react";
import Img from "../Atoms/Img";
import Paragraph from "../Molecules/Paragraph";
import classNames from "classnames";

function Paragraphs({ data, styleName }) {
  const { img, paragraph1, paragraph2, paragraph3 } = data;
  const { img_style, para1_style, para2_style, para3_style } = styleName;

  return (
    <div className={classNames("Paragraphs")}>
      <Img image={img} styleName={img_style}></Img>
      <section>
        <Paragraph data={paragraph1} styleName={para1_style}></Paragraph>
        <Paragraph data={paragraph2} styleName={para2_style}></Paragraph>
        <Paragraph data={paragraph3} styleName={para3_style}></Paragraph>
      </section>
    </div>
  );
}

export default Paragraphs;
