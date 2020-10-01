import React from "react";
import Span from "../Atoms/Span";
import Dquestion from "../Organisms/Dquestion";
import classNames from "classnames";

// import "../../scss/Templates/SeparatedTemplate5.scss";

function SeparatedTemplate5({ data, styleName }) {
  const { dq_data, s1_data, s2_data, s3_data } = data;
  const { template_style, dq_style, s1_style, s2_style, s3_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate4", template_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <Span styleName={s1_style}>{s1_data.text}</Span>
      <Span styleName={s2_style}>{s2_data.text}</Span>
      <Span styleName={s3_style}>{s3_data.text}</Span>
    </div>
  );
}

export default SeparatedTemplate5;
