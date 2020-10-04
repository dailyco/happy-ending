import React from "react";
import MultiTextFieldTemplate from "../Templates/MultiTextFieldTemplate";
import P8_1_2_Video from "../../assets/videos/8-1-1-travel.mp4";

import "../../scss/pages.scss";

function P8_1_2() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "여행을 함께 떠나고 싶으시군요. 누구와 함께 어디로 떠나시겠습니까?",
      },
    },
    mtfr_data: {
      to: "/p9",
      mtfs_data: {
        l_text: "3일간의 여행을 (",
        ph1: "누구",
        m_text: ")와/과 함께 (",
        ph2: "어디",
        r_text: ")(으)로 떠난다.",
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white"],
    },
    mtfr_style: {
      mtfs_style: {
        bg_style: ["l", "weak", "dark-greenish-blue"],
        l_text_style: ["noto", "s", "normal", "white"],
        tf1_style: ["s", "dark-white"],
        m_text_style: ["noto", "s", "normal", "white"],
        tf2_style: ["s", "dark-white"],
        r_text_style: ["noto", "s", "normal", "white"],
      },
      btn_style: ["xs", "greenish-blue"],
    },
  };

  return (
    <div className={("Page", "P8_1_2", "bg-video")}>
      <video autoPlay muted loop>
        <source src={P8_1_2_Video} type="video/mp4" />
      </video>
      <MultiTextFieldTemplate data={data} styleName={styleName}></MultiTextFieldTemplate>
    </div>
  );
}

export default P8_1_2;
