import React from "react";
import classNames from "classnames";
import InsertyPaperTemplate from "../Templates/InsertyPaperTemplate";

import "../../scss/Pages/P10.scss";

function P10() {
  const data = {
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question:
          "그 동안 꿈꿨던 여행지로 마지막 여행을 다녀온 당신.\n당신에게는 영원히 기억될 추억이 생겼습니다.\n\n이제 4일의 시간이 남았네요.\n남은 시간동안 주변을 돌아보며 정리하는 시간을 가지세요.",
      },
    },
    span_data: {
      text: "탭하여 다음 페이지로 넘어가기",
    },
  };
  const styleName = {
    template_style: ["left"],
    dq_style: {
      h3_style: ["normal", "left", "white"],
      p_style: ["left", "white"],
    },
    span_style: ["noto", "xs", "white", "light", "left"],
  };

  return (
    <div className={classNames("P10")}>
      <video autoPlay muted loop>
        <source src="../../assets/video/10-after\ travel.mp4" type="video/mp4" />
      </video>
      <InsertyPaperTemplate data={data} styleName={styleName}></InsertyPaperTemplate>
    </div>
  );
}

export default P10;
