import React from "react";
import SeparatedTemplate25 from "../Templates/SeparatedTemplate25";
import P25_Video from "../../assets/video/25-death.mp4";
import "../../scss/Pages/P25.scss";

function P25() {
  const data = {
    h3_data: "D-DAY",
    span1_data: "홍길동 님은",
    span2_data: "2020.00.00",
    span3_data: "사망했습니다.",
    span4_data: "탭하여 다음 페이지로 넘어가기",
  };
  const styleName = {
    h3_style: ["heavy", "neon-green"],
    span1_style: ["noto", "s", "medium", "neon-green"],
    span2_style: ["nanum", "l", "bold", "neon-green"],
    span3_style: ["noto", "s", "medium", "neon-green"],
    span4_style: ["noto", "xs", "light", "neon-green"],
  };

  return (
    <div className={"P25"}>
      <video autoPlay muted>
        <source src={P25_Video} type="video/mp4" />
      </video>
      <SeparatedTemplate25 data={data} styleName={styleName}></SeparatedTemplate25>
    </div>
  );
}

export default P25;
