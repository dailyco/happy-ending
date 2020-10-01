import React from "react";
import Button from "../Atoms/Button";
import ItemBox from "../Organisms/ItemBox";
import Dquestion from "../Organisms/Dquestion";
import classNames from "classnames";

import "../../scss/Templates/SeparatedTemplate14.scss";

function SeparatedTemplate14({ data, styleName }) {
  const { dq_data, button_data } = data;
  const { template_style, dq_style, button_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate14", template_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <div className={classNames("ItemBoxContainer")}>
        <ItemBox></ItemBox>
        <Button styleName={button_style}>{button_data.text}</Button>
      </div>
    </div>
  );
}

export default SeparatedTemplate14;
