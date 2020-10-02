import React from "react";
import Dquestion from "../Organisms/Dquestion";
import SelectionResponse from "../Organisms/SelectionResponse";
import "../../scss/Templates/MultipleChoiceTemplate.scss";

function MultipleChoiceTemplate({ data, styleName }) {
  const { dq_data, sr_data } = data;
  const { dq_style, sr_style } = styleName;

  return (
    <div className={"MultipleChoiceTemplate"}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <SelectionResponse data={sr_data} styleName={sr_style}></SelectionResponse>
    </div>
  );
}

export default MultipleChoiceTemplate;
