import React from "react";
import classNames from "classnames";
import SeparatedTemplate14 from "../Templates/SeparatedTemplate14";

import "../../scss/Pages/P14.scss";

function P14() {
  const data = {
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question: ["당신은 유서를 작성하기 위해 책상에 앉았습니다.", <br />, "앞에 있는 노트에 마지막 말을 남겨주세요."],
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    ib_style: [],
    button_style: ["noto", "xs", "blue", "light"],
  };
  return (
    <div className={classNames("P14")}>
      <SeparatedTemplate14 data={data} styleName={styleName}></SeparatedTemplate14>
    </div>
  );
}

export default P14;
