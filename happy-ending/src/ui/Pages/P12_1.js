import React from "react";
import classNames from "classnames";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/Pages/P12_1.scss";

function P12_1() {
  const data = {
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question: ["책장을 정리하며 당신의 사진이 담긴 앨범을 발견했습니다.", <br />, "살아온 날들을 되돌아보며 가장 행복했던 순간을 떠올립니다. 그 순간은 언제인가요?"],
      },
    },
    ftfr_data: {
      to: "/p13",
      ftf_data: {
        tf_data: {
          placeHolder: "내용을 입력하세요.",
        },
      },
    },
  };
  const styleName = {
    template_style: ["center"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white", "two-line"],
    },
    ftfr_style: {
      ftf_style: {
        ftf_style: ["cocoa", "weak", "round"],
        tf_style: ["xl", "normal", "white"],
      },
      button_style: ["xs", "cocoa"],
    },
  };

  return (
    <div className={classNames("P12-1")}>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P12_1;
