import React from "react";
import SeparateTemplate17 from "../Templates/SeparateTemplate17";
import F1 from "../../assets/img/1F.png";
import F2 from "../../assets/img/2F.png";
import F3 from "../../assets/img/3F.png";
import F4 from "../../assets/img/4F.png";
import F5 from "../../assets/img/5F.png";

import "../../scss/Pages/P17.scss";

function P17() {
  const data = {
    dq_data: {
      h3_data: {
        day: 3,
      },
      p_data: {
        question: ["사진관을 나와 집으로 돌아가던 중, 동네 꽃집의 꽃들을 보았습니다.", <br />, "사흘 후에 있을 당신의 장례식에 헌화될 특별한 의미가 담긴 꽃을 골라주세요."],
      },
    },
    imgs: [
      {
        image: F1,
        alt: "장미",
      },
      {
        image: F2,
        alt: "프리지아",
      },
      {
        image: F3,
        alt: "안개꽃",
      },
      {
        image: F4,
        alt: "튤립",
      },
      {
        image: F5,
        alt: "국화",
      },
    ],
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
  };

  return (
    <div className={"P17"}>
      <SeparateTemplate17 data={data} styleName={styleName}></SeparateTemplate17>
    </div>
  );
}

export default P17;
