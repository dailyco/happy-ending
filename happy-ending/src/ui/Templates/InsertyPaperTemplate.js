import React from "react";
import classNames from "classnames";
import Dquestion from "../Organisms/Dquestion";
import Span from "../Atoms/Span";

import "../../scss/Templates/InsertyPaperTemplate.scss";

function InsertyPaperTemplate({ data, styleName }) {
  const { dq_data, span_data } = data;
  const { template_style, dq_style, span_style } = styleName;
  return (
    <div className={classNames("InsertyPaperTemplate", template_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <Span styleName={span_style}>{span_data.text}</Span>
    </div>
  );
}

InsertyPaperTemplate.defaultProps = {
  styleName: [],
};

export default InsertyPaperTemplate;
