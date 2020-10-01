import React from "react";
import MultipleChoiceTemplate from "../Templates/MultipleChoiceTemplate";
import P6_Video from "../../assets/video/6-tell or not.mp4";
import "../../scss/Pages/P6.scss";

function P6() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: ["책상 앞에 앉아 벽에 걸린 여행 사진을 바라보며", <br />, "죽기 전에 꼭 가보고 싶었던 여행지를 생각합니다."],
      },
    },
    sr_data: {
      buttons: [
        {
          text: "A. 3일간 여행을 떠난다.",
        },
        {
          text: "B. 3일간 집에 남는다.",
        },
      ],
    },
  };

  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    sr_style: {
      btn_style: ["xl", "white"],
    },
  };

  return (
    <div className={"P6"}>
      <video autoPlay muted>
        <source src={P6_Video} type="video/mp4" />
      </video>
      <MultipleChoiceTemplate data={data} styleName={styleName}></MultipleChoiceTemplate>
    </div>
  );
}

export default P6;
