import React from "react";
import Dquestion from "../Organisms/Dquestion";
import Img from "../Atoms/Img";
import "../../scss/Templates/SeparateTemplate17.scss";

function SeparateTemplate17({ data, styleName }) {
  const { bg_data, dq_data, imgs } = data;
  const { dq_style } = styleName;

  return (
    <div className={"SeparateTemplate17"}>
      <Img image={bg_data.image} alt={bg_data.alt}></Img>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      {imgs.map((img) => (
        <Img image={img.image} alt={img.alt}></Img>
      ))}
    </div>
  );
}

export default SeparateTemplate17;
