import React from "react";
import classNames from "classnames";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/Pages/P13.scss";

function P13() {
  const data = {
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question: "반대로, 당신의 삶에서 지우고 싶은 순간은 언제인가요?",
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
        ftf_style: ["charcoal-black", "weak", "round"],
        tf_style: ["xl", "normal", "white"],
      },
      button_style: ["xs", "grayish-navy", "center"],
    },
  };

  return (
    <div className={classNames("P13")}>
      <video autoPlay muted loop>
        <source src="../../assets/video/13-erase.mp4" type="video/mp4" />
      </video>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P13;
