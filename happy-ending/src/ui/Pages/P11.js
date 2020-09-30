import React from "react";
import classNames from "classnames";
import InsertyPaperTemplate from "../Templates/InsertyPaperTemplate";
import P11Video from "../../assets/video/11-after home.mp4";

import "../../scss/Pages/P11.scss";

function P11() {
  const data = {
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question: "집에서 편안한 휴식을 취한 당신.\n평화로운 일상에서 당신은 소소한 행복을 누렸습니다.\n\n이제 4일의 시간이 남았네요.\n남은 시간동안 당신의 주변을 돌아보며 정리하는 시간을 가지세요.",
      },
    },
    span_data: {
      text: "탭하여 다음 페이지로 넘어가기",
    },
  };
  const styleName = {
    template_style: ["left"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white"],
    },
    span_style: ["noto", "xs", "white", "light"],
  };

  return (
    <div className={classNames("P11")}>
      <video autoPlay muted loop>
        <source src={P11Video} type="video/mp4" />
      </video>
      <InsertyPaperTemplate data={data} styleName={styleName}></InsertyPaperTemplate>
    </div>
  );
}

export default P11;
