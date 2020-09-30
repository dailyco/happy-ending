import React from "react";
import classNames from "classnames";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/Pages/P21.scss";

function P21() {
  const data = {
    dq_data: {
      h3_data: {
        day: 2,
      },
      p_data: {
        question: "장례식장에 올 사람들 중, 당신의 죽음에 가장 슬피 울어줄 것 같은 사람이 누구인지 생각해봅니다.\n그 사람은 누구인가요?",
      },
    },
    ftfr_data: {
      ftf_data: {
        tf_data: {
          placeHolder: "내용을 입력해주세요.",
        },
      },
      button_data: {
        text: "확인",
      },
    },
  };
  const styleName = {
    template_style: ["center"],
    dq_style: {
      h3_style: ["normal", "center", "eclipse"],
      p_style: ["center", "eclipse"],
    },
    ftfr_style: {
      ftf_style: {
        ftf_style: ["white", "weak", "round"],
        tf_style: ["xl", "normal", "eclipse"],
      },
      button_style: ["xs", "white", "center", "translucent"],
    },
  };

  return (
    <div className={classNames("P21")}>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P21;
