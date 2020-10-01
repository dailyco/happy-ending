import React from "react";
import Dquestion from "../Organisms/Dquestion";
import SelectionResponse from "../Organisms/SelectionResponse";

function MultipleChoiceTemplate({ data, styleName }) {
  const { dq_data, buttons } = data;
  const { dq_style } = styleName;

  return (
    <>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <SelectionResponse buttons={buttons}></SelectionResponse>
    </>
  );
}

export default MultipleChoiceTemplate;
