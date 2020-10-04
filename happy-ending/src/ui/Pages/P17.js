import React from "react";
import SeparatedTemplate17 from "../Templates/SeparatedTemplate17";
import Window from "../../assets/images/bg_images/17-Window.png";
import F1 from "../../assets/images/17p_images/1F.png";
import F2 from "../../assets/images/17p_images/2F.png";
import F3 from "../../assets/images/17p_images/3F.png";
import F4 from "../../assets/images/17p_images/4F.png";
import F5 from "../../assets/images/17p_images/5F.png";

import "../../scss/pages.scss";

function P17() {
  const data = {
    bg_data: {
      image: Window,
      alt: "window",
    },
    dq_data: {
      h3_data: {
        day: 3,
      },
      p_data: {
        question: ["사진관을 나와 집으로 돌아가던 중, 동네 꽃집의 꽃들을 보았습니다.", <br />, "사흘 후에 있을 당신의 장례식에 헌화될 특별한 의미가 담긴 꽃을 골라주세요."],
      },
    },
    imgs: [
      {
        image: F1,
        alt: "장미",
      },
      {
        image: F2,
        alt: "프리지아",
      },
      {
        image: F3,
        alt: "안개꽃",
      },
      {
        image: F4,
        alt: "튤립",
      },
      {
        image: F5,
        alt: "국화",
      },
    ],
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
  };

  return (
    <div className={("Page", "P17")}>
      <SeparatedTemplate17 data={data} styleName={styleName}></SeparatedTemplate17>
    </div>
  );
}

export default P17;
