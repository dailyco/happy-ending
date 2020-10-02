import React from "react";
import MultiTextFieldResponse from "../Organisms/MultiTextFieldResponse";
import Dquestion from "../Organisms/Dquestion";
import "../../scss/Templates/MultiTextFieldTemplate.scss";

function MultiTextFieldTemplate({ data, styleName }) {
  const { dq_data, mtfr_data } = data;
  const { dq_style, mtfr_style } = styleName;

  return (
    <div className={"MultiTextFieldTemplate"}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <MultiTextFieldResponse data={mtfr_data} styleName={mtfr_style}></MultiTextFieldResponse>
    </div>
  );
}

export default MultiTextFieldTemplate;
