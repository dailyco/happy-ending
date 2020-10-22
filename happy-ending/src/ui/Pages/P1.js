import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import SeparatedTemplate1 from "../Templates/SeparatedTemplate1";
import HappyendingLogo from "../../assets/images/Happy Ending Logo_new.png";

import "../../scss/pages.scss";
import "../../scss/animations.scss";

function P1() {
  localStorage.clear();
  console.log(localStorage);

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
    img_style: ["logo"],
    span_style: ["noto", "xs", "davy-gray", "light", "fade-in-out"],
  };
  return (
    <Link to={"/p2"}>
      <div className={classNames("Page", "P1")}>
        <SeparatedTemplate1 data={data} styleName={styleName}></SeparatedTemplate1>
      </div>
    </Link>
  );
}

export default P1;
