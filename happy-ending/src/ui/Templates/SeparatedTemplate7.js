import React from "react";
import Span from "../Atoms/Span";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Dquestion from "../Organisms/Dquestion";

import "../../scss/Templates/SeparatedTemplate7.scss";

function SeparatedTemplate7({ data, styleName }) {
  const { dq_data, s1_data, s2_data } = data;
  const { tp_style, dq_style, s1_style, s2_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate7", tp_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <div className={classNames("SpanPair")}>
        <Link to={s1_data.to}>
          <Span styleName={s1_style}>{s1_data.text}</Span>
        </Link>
        <Link to={s2_data.to}>
          <Span styleName={s2_style}>{s2_data.text}</Span>
        </Link>
      </div>
    </div>
  );
}

export default SeparatedTemplate7;
