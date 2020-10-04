import React from "react";
import Dquestion from "../Organisms/Dquestion";
import Button from "../Atoms/Button";
import "../../scss/Templates/SeparatedTemplate16.scss";
import { Link } from "react-router-dom";

function SeparatedTemplate16({ data, styleName }) {
  const { dq_data } = data;
  const { dq_style, btn_style } = styleName;

  return (
    <div className={"SeparatedTemplate16"}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <Link to={"/p16_1"}>
        <Button styleName={btn_style}>사진촬영</Button>
      </Link>
    </div>
  );
}

export default SeparatedTemplate16;
