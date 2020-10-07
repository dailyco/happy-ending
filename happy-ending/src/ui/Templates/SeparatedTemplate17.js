import React from "react";
import Img from "../Atoms/Img";
import { Link } from "react-router-dom";
import Dquestion from "../Organisms/Dquestion";

import "../../scss/Templates/SeparatedTemplate17.scss";

function SeparatedTemplate17({ data, styleName }) {
  const { bg_data, dq_data, imgs } = data;
  const { dq_style } = styleName;

  return (
    <div className={"SeparatedTemplate17"}>
      {imgs.map((img) => (
        <Link to={"/p18"}>
          <Img image={img.image} alt={img.alt}></Img>
        </Link>
      ))}
      <Img image={bg_data.image} alt={bg_data.alt}></Img>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
    </div>
  );
}

export default SeparatedTemplate17;
