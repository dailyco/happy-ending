import React from "react";
import classNames from "classnames";
import Dquestion from "../Organisms/Dquestion";
import SingleTextFieldResponse from "../Organisms/SingleTextFieldResponse";

import "../../scss/Templates/SingleTextFieldTemplate.scss";

function SingleTextFieldTemplate({ data, styleName }) {
  const { dq_data, stfr_data } = data;
  const { tp_style, dq_style, stfr_style } = styleName;

  return (
    <div className={classNames("SingleTextFieldTemplate", tp_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <SingleTextFieldResponse data={stfr_data} styleName={stfr_style}></SingleTextFieldResponse>
    </div>
  );
}

export default SingleTextFieldTemplate;
