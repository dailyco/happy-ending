import React from "react";
import SingleTextFieldTemplate from "../Templates/SingleTextFieldTemplate";
import P8_2_1_Video from "../../assets/videos/8-2-1-stay home alone.mp4";

import "../../scss/Pages/P8_2_1.scss";

function P8_2_1() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "집에서 혼자 시간을 보내기로 하셨군요. 무엇을 하면서 보내시겠습니까?",
      },
    },
    stfr_data: {
      to: "/p9",
      stfs_data: {
        l_text: "집에서 (",
        placeHolder: "무엇을 한",
        r_text: ")다.",
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    stfr_style: {
      stfs_style: {
        bg_style: ["m", "strong", "charcoal-gray"],
        l_text_style: ["noto", "s", "normal", "eclipse"],
        tf_style: ["s", "davy-gray"],
        r_text_style: ["noto", "s", "normal", "eclipse"],
      },
      btn_style: ["xs", "white"],
    },
  };

  return (
    <div className={"P8_2_1"}>
      <video autoPlay muted loop>
        <source src={P8_2_1_Video} type="video/mp4" />
      </video>
      <SingleTextFieldTemplate data={data} styleName={styleName}></SingleTextFieldTemplate>
    </div>
  );
}

export default P8_2_1;
