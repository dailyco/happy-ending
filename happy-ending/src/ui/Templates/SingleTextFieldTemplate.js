import React from "react";
import SingleTextFieldResponse from "../Organisms/SingleTextFieldResponse";
import Dquestion from "../Organisms/Dquestion";
import "../../scss/Templates/SingleTextFieldTemplate.scss";

function SingleTextFieldTemplate({ data, styleName }) {
  const { dq_data, stfr_data } = data;
  const { dq_style, stfr_style } = styleName;

  return (
    <div className={"SingleTextFieldTemplate"}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <SingleTextFieldResponse data={stfr_data} styleName={stfr_style}></SingleTextFieldResponse>
    </div>
  );
}

export default SingleTextFieldTemplate;
