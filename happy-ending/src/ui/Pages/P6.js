import React from "react";
import MultipleChoiceTemplate from "../Templates/MultipleChoiceTemplate";
import P6_Video from "../../assets/videos/6-tell or not.mp4";

import "../../scss/Pages/P6.scss";

function P6() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: ["사망일을 알게 된 당신, 집 안에 덩그러니 앉아있습니다.", <br />, "침대 머리맡에 놓여있는 핸드폰을 바라보며 주변인들에게 이 사실을 알릴지 고민합니다."],
      },
    },
    sr_data: {
      buttons: [
        {
          text: "A. 가족, 친구에게 이 사실을 말한다",
          to: "/p7",
        },
        {
          text: "B. 말하지 않는다",
          to: "/p7",
        },
      ],
    },
  };

  const styleName = {
    tp_style: ["left", "two-btn"],
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
