import React from "react";
import SingleTextFieldTemplate from "../Templates/SingleTextFieldTemplate";
import P8_1_1_Video from "../../assets/video/8-1-1-travel.mp4";

import "../../scss/Pages/P8_1_1.scss";

function P8_1_1() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "여행을 혼자 떠나시는군요. 어디로 떠나시겠습니까?",
      },
    },
    stfr_data: {
      stfs_data: {
        l_text: "3일간의 여행을 혼자 (",
        placeHolder: "어디",
        r_text: ")(으)로 떠난다.",
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white"],
    },
    stfr_style: {
      stfs_style: {
        bg_style: ["s", "weak", "dark-greenish-blue"],
        l_text_style: ["noto", "s", "normal", "white"],
        tf_style: ["s", "dark-white"],
        r_text_style: ["noto", "s", "normal", "white"],
      },
      btn_style: ["xs", "greenish-blue"],
    },
  };

  return (
    <div className={"P8_1_1"}>
      <video autoPlay muted loop>
        <source src={P8_1_1_Video} type="video/mp4" />
      </video>
      <SingleTextFieldTemplate data={data} styleName={styleName}></SingleTextFieldTemplate>
    </div>
  );
}

export default P8_1_1;
