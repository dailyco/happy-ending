import React from "react";
import classNames from "classnames";
import Dquestion from "../Organisms/Dquestion";
import FullTextFieldResponse from "../Organisms/FullTextFieldResponse";

import "../../scss/Templates/FullTextFieldTemplate.scss";

function FullTextFieldTemplate({ data, styleName }) {
  const { dq_data, ftfr_data } = data;
  const { template_style, dq_style, ftfr_style } = styleName;
  return (
    <div className={classNames("FullTextFieldTempalte", template_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <FullTextFieldResponse data={ftfr_data} styleName={ftfr_style}></FullTextFieldResponse>
    </div>
  );
}

FullTextFieldTemplate.defaultProps = {
  styleName: ["left"],
};

export default FullTextFieldTemplate;
