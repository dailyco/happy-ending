import React from "react";
import SeparatedTemplate16 from "../Templates/SeparatedTemplate16";

import "../../scss/Pages/P16.scss";

function P16() {
  const data = {
    dq_data: {
      h3_data: {
        day: 3,
      },
      p_data: {
        question: ["오늘은 영정사진을 찍기로 한 날입니다.", <br />, "당신이 가장 좋아하는 옷을 입고 동네 사진관에 도착했습니다.", <br />, "당신의 가장 아름다운 순간을 사진으로 남기세요."],
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    btn_style: ["xs", "wood"],
  };

  return (
    <div className={"P16"}>
      <SeparatedTemplate16 data={data} styleName={styleName}></SeparatedTemplate16>
    </div>
  );
}

export default P16;
