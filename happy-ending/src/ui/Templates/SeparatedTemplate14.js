import React from "react";
import Button from "../Atoms/Button";
import ItemBox from "../Organisms/ItemBox";
import Dquestion from "../Organisms/Dquestion";
import classNames from "classnames";

import "../../scss/Templates/SeparatedTemplate14.scss";
import { Link } from "react-router-dom";

function SeparatedTemplate14({ data, styleName }) {
  const { dq_data } = data;
  const { dq_style, button_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate14", "clearfix")}>
      <div className={classNames("DquestionContainer", "float--left")}>
        <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      </div>
      <div className={classNames("ItemBoxContainer", "float--right")}>
        <ItemBox></ItemBox>
        <Link to={"/p15"}>
          <Button styleName={button_style}>확인</Button>
        </Link>
      </div>
    </div>
  );
}

export default SeparatedTemplate14;
