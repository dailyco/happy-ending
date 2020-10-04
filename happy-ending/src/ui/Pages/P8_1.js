import React from "react";
import MultipleChoiceTemplate from "../Templates/MultipleChoiceTemplate";
import P8_1_Video from "../../assets/videos/8-1-travel alone_together.mp4";

import "../../scss/pages.scss";

function P8_1() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "여행을 혼자 떠나시겠습니까? 함께 떠나시겠습니까?",
      },
    },
    sr_data: {
      buttons: [
        {
          to: "/p8_1_1",
          text: "A. 3일간의 여행을 혼자 떠난다",
        },
        {
          to: "/p8_1_2",
          text: "B. 3일간의 여행을 함께 떠난다",
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
      btn_style: ["m", "white"],
    },
  };

  return (
    <div className={("Page", "P8_1", "bg-video")}>
      <video autoPlay muted>
        <source src={P8_1_Video} type="video/mp4" />
      </video>
      <MultipleChoiceTemplate data={data} styleName={styleName}></MultipleChoiceTemplate>
    </div>
  );
}

export default P8_1;
