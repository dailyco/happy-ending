import React from "react";
import classNames from "classnames";
import InsertyPaperTemplate from "../Templates/InsertyPaperTemplate";

import "../../scss/Pages/P26.scss";

function P26() {
  const data = {
    dq_data: {
      h3_data: {
        day: "Day",
      },
      p_data: {
        question: "당신은 지금까지\n죽음을 마주하고 삶을 되돌아보는 과정을 통해\n당신만의 이야기를 완성했습니다.\n이제 당신의 삶으로 돌아가\n앞으로 남은 당신의 페이지를 채우세요.",
      },
    },
    span_data: {
      text: "탭하여 다음 페이지로 넘어가기",
    },
  };
  const styleName = {
    template_style: ["center"],
    dq_style: {
      h3_style: ["normal", "center", "white"],
      p_style: ["center", "white"],
    },
    span_style: ["noto", "xs", "dark-gray", "light", "center"],
  };

  return (
    <div className={classNames("P26")}>
      <InsertyPaperTemplate data={data} styleName={styleName}></InsertyPaperTemplate>
    </div>
  );
}

export default P26;
