import React from "react";
import MultipleChoiceTemplate from "../Templates/MultipleChoiceTemplate";

import "../../scss/Pages/P20.scss";

function P20() {
  const data = {
    dq_data: {
      h3_data: {
        day: 2,
      },
      p_data: {
        question: ["당신은 어제 고른 꽃을 바라보며, 이틀 후에 있을 장례식의 모습을 상상해봅니다.", <br />, "장례식의 분위기는 어떨까요?"],
      },
    },
    sr_data: {
      buttons: [
        {
          to: "/p21",
          text: "장례식의 분위기는 어떨까요?",
        },
        {
          to: "/p21",
          text: "나의 죽음에 눈물을 흘리며 슬퍼하고 있다",
        },
        {
          to: "/p21",
          text: "서로 위로하며 슬픔을 달래고 있다",
        },
        {
          to: "/p21",
          text: "덤덤하게 나의 죽음을 받아들이고 있다",
        },
      ],
    },
  };

  const styleName = {
    tp_style: ["center", "four-btn"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    sr_style: {
      btn_style: ["xxl", "white"],
    },
  };

  return (
    <div className={"P20"}>
      <MultipleChoiceTemplate data={data} styleName={styleName}></MultipleChoiceTemplate>
    </div>
  );
}

export default P20;
