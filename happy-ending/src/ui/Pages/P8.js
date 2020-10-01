import React from "react";
import MultipleChoiceTemplate from "../Templates/MultipleChoiceTemplate";
import "../../scss/Pages/P8.scss";

function P8() {
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
        },
        {
          text: "B. 말하지 않는다",
        },
      ],
    },
  };

  const styleName = {
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white"],
    },
    sr_style: {
      btn_style: ["xl", "nero"],
    },
  };

  return (
    <div className={"P8"}>
      <MultipleChoiceTemplate data={data} styleName={styleName}></MultipleChoiceTemplate>
    </div>
  );
}

export default P8;
