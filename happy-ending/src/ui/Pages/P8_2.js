import React from "react";
import MultipleChoiceTemplate from "../Templates/MultipleChoiceTemplate";
import "../../scss/Pages/P8_2.scss";

function P8_2() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "여행을 가지 않고 집에 남아 시간을 보내기로 했습니다.",
      },
    },
    sr_data: {
      buttons: [
        {
          text: "A. 집에서 혼자 보낸다",
        },
        {
          text: "B. 집에서 사람들과 함께 보낸다",
        },
      ],
    },
  };

  const styleName = {
    tp_style: ["center", "two-btn"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    sr_style: {
      btn_style: ["l", "white"],
    },
  };

  return (
    <div className={"P8_2"}>
      <MultipleChoiceTemplate data={data} styleName={styleName}></MultipleChoiceTemplate>
    </div>
  );
}

export default P8_2;
