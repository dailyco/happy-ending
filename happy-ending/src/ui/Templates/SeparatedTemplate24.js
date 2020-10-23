import React from "react";
import classNames from "classnames";
import Dquestion from "../Organisms/Dquestion";
import GraveStoneResponse from "../Organisms/GraveStoneResponse";

import "../../scss/Templates/SeparatedTemplate24.scss";

function SeparatedTemplate24({ data, styleName }) {
  const { dq_data, gsr_data } = data;
  const { tp_style, dq_style, gsr_style } = styleName;

  return (
    <div className={classNames("SeparatedTemplate24", tp_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <GraveStoneResponse data={gsr_data} styleName={gsr_style}></GraveStoneResponse>
    </div>
  );
}

export default SeparatedTemplate24;
