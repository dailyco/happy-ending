import React from "react";
import classNames from "classnames";
import Dquestion from "../Organisms/Dquestion";
import MultiTextFieldResponse from "../Organisms/MultiTextFieldResponse";

import "../../scss/Templates/MultiTextFieldTemplate.scss";

function MultiTextFieldTemplate({ data, styleName }) {
  const { dq_data, mtfr_data } = data;
  const { tp_style, dq_style, mtfr_style } = styleName;

  return (
    <div className={classNames("MultiTextFieldTemplate", tp_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <MultiTextFieldResponse data={mtfr_data} styleName={mtfr_style}></MultiTextFieldResponse>
    </div>
  );
}

export default MultiTextFieldTemplate;
