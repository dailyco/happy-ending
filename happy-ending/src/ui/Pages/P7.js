import React from "react";
import classNames from "classnames";
import SeparatedTemplate7 from "../Templates/SeparatedTemplate7";
import P7Vedio from "../../assets/video/7-break or not.mp4";

import "../../scss/Pages/P7.scss";

function P7() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: ["주변을 둘러보니 10살때부터 돈을 모았던 돼지저금통이 보입니다.", <br />, "돼지저금통을 깰까요? 아니면 그대로 둘까요?"],
      },
    },
    s1_data: {
      text: "깨고싶으면 망치를 탭해주세요",
    },
    s2_data: {
      text: "그대로 두려면 돼지저금통을 탭해주세요",
    },
  };
  const styleName = {
    template_style: ["center"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    s1_style: ["noto", "xs", "davy-gray", "normal"],
    s2_style: ["noto", "xs", "davy-gray", "normal"],
  };
  return (
    <div className={classNames("P7")}>
      <video autoPlay muted loop>
        <source src={P7Vedio} type="video/mp4" />
      </video>
      <SeparatedTemplate7 data={data} styleName={styleName}></SeparatedTemplate7>
    </div>
  );
}

export default P7;
