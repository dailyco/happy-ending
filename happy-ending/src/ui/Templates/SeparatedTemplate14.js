import React from "react";
import classNames from "classnames";
import Button from "../Atoms/Button";
import { Link } from "react-router-dom";
import ItemBox from "../Organisms/ItemBox";
import Dquestion from "../Organisms/Dquestion";

import "../../scss/Templates/SeparatedTemplate14.scss";

function SeparatedTemplate14({ data, styleName }) {
  const { dq_data, ib_data } = data;
  const { tp_style, dq_style, button_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate14", "clearfix", tp_style)}>
      <div className={classNames("DquestionContainer", "float--left")}>
        <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      </div>
      <div className={classNames("ItemBoxContainer", "float--right")}>
        <ItemBox data={ib_data}></ItemBox>
        <Link to={"/p15"}>
          <Button styleName={button_style}>확인</Button>
        </Link>
      </div>
    </div>
  );
}

export default SeparatedTemplate14;
