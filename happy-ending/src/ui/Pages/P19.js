import React from "react";
import classNames from "classnames";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/Pages/P19.scss";

function P19() {
  const data = {
    dq_data: {
      h3_data: {
        day: 2,
      },
      p_data: {
        question: "당신의 장례식장에 올 사람들에게 들려주고 싶은 노래 한 곡을 골라주세요.",
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
        ftf_style: ["gray", "strong", "round"],
        tf_style: ["xl", "normal", "eclipse"],
      },
      button_style: ["xs", "orange", "center"],
    },
  };

  return (
    <div className={classNames("P19")}>
      <video autoPlay muted loop>
        <source src="../../assets/video/19-music.mp4" type="video/mp4" />
      </video>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P19;
