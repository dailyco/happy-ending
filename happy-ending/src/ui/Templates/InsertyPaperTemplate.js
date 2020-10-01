import React from "react";
import classNames from "classnames";
import Dquestion from "../Organisms/Dquestion";
import Span from "../Atoms/Span";

import "../../scss/Templates/InsertyPaperTemplate.scss";

function InsertyPaperTemplate({ data, styleName }) {
  const { dq_data } = data;
  const { template_style, dq_style, span_style } = styleName;
  return (
    <div className={classNames("InsertyPaperTemplate", template_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <Span styleName={span_style}>탭하여 다음 페이지로 넘어가기</Span>
    </div>
  );
}

InsertyPaperTemplate.defaultProps = {
  styleName: [],
};

export default InsertyPaperTemplate;
