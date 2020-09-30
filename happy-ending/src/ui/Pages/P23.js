import React from "react";
import classNames from "classnames";
import InsertyPaperTemplate from "../Templates/InsertyPaperTemplate";
import P23Vedio from "../../assets/video/23-after D-1.mp4";

import "../../scss/Pages/P23.scss";

function P23() {
  const data = {
    dq_data: {
      h3_data: {
        day: 1,
      },
      p_data: {
        question: "죽기 전 마지막 날입니다.\n집 앞 공원 벤치에 앉아 풍경을 바라보고 있습니다.\n세상의 마지막 풍경을 눈에 담으며 당신의 삶의 흔적을 남겨봅니다.\n",
      },
    },
    span_data: {
      text: "탭하여 다음 페이지로 넘어가기",
    },
  };
  const styleName = {
    template_style: ["center"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white"],
    },
    span_style: ["noto", "xs", "davy-gray", "light"],
  };

  return (
    <div className={classNames("P23")}>
      <video autoPlay muted loop>
        <source src={P23Vedio} type="video/mp4" />
      </video>
      <InsertyPaperTemplate data={data} styleName={styleName}></InsertyPaperTemplate>
    </div>
  );
}

export default P23;
