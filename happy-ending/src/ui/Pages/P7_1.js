import React from "react";
import classNames from "classnames";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/Pages/P7_1.scss";

function P7_1() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: ["돼지저금통을 깨기로 했습니다.", <br />, "무엇을 위해 사용할 것인가요?"],
      },
    },
    ftfr_data: {
      ftf_data: {
        tf_data: {
          placeHolder: "내용을 입력해주세요.",
        },
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse", "two-line"],
    },
    ftfr_style: {
      ftf_style: {
        ftf_style: ["charcoal-gray", "normal", "little-round"],
        tf_style: ["xl", "normal", "eclipse"],
      },
      button_style: ["xs", "white"],
    },
  };
  return (
    <div className={classNames("P7-1")}>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P7_1;
