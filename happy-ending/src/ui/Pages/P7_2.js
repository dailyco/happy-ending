import React from "react";
import classNames from "classnames";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/Pages/P7_2.scss";

function P7_2() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "돼지저금통을 그대로 두기로 했습니다.\n왜 그대로 두었나요?",
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
        ftf_style: ["charcoal-gray", "normal", "little-round"],
        tf_style: ["xl", "normal", "eclipse"],
      },
      button_style: ["xs", "white", "center"],
    },
  };
  return (
    <div className={classNames("P7-2")}>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P7_2;
