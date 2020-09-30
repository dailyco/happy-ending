import React from "react";
import classNames from "classnames";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/Pages/P12_2.scss";

function P12_2() {
  const data = {
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question: "집으로 돌아와 짐 정리를 하던 중 당신의 사진이 담긴 앨범을 발견했습니다.\n살아온 날들을 되돌아보며 가장 행복했던 순간을 떠올립니다. 그 순간은 언제인가요?",
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
      h3_style: ["normal", "center", "white"],
      p_style: ["center", "white"],
    },
    ftfr_style: {
      ftf_style: {
        ftf_style: ["khaki-brown", "weak", "round"],
        tf_style: ["xl", "normal", "white"],
      },
      button_style: ["xs", "dark-brown", "center"],
    },
  };

  return (
    <div className={classNames("P12-2")}>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P12_2;
