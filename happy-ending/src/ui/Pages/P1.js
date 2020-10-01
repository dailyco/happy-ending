import React from "react";
import classNames from "classnames";
import SeperatedTemplate1 from "../Templates/SeperatedTemplate1";
import HappyendingLogo from "../../assets/img/Happy Ending Logo_new.png";

import "../../scss/Pages/P1.scss";

function P1() {
  const data = {
    img_data: {
      image: HappyendingLogo,
      alt: "happyending_logo",
    },
    span_data: {
      text: "탭하여 게임 시작하기",
    },
  };
  const styleName = {
    template_style: ["center"],
    img_style: ["logo"],
    span_style: ["noto", "xs", "davy-gray", "light"],
  };
  return (
    <div className={classNames("P1")}>
      <SeperatedTemplate1 data={data} styleName={styleName}></SeperatedTemplate1>
    </div>
  );
}

export default P1;
