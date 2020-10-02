import React from "react";
import classNames from "classnames";
import SeparatedTemplate4 from "../Templates/SeparatedTemplate4";
import P4Vedio from "../../assets/video/4-book.mp4";

import "../../scss/Pages/P4.scss";

function P4() {
  const data = {
    p_data: {
      text: [
        "좋은 결말이 한 권의 책을 완성하는 것처럼",
        <br />,
        "인생의 결말이 삶을 완성합니다.",
        <br />,
        "여기 당신의 인생이라는 책이 있습니다.",
        <br />,
        "이 책의 엔딩은 아직 정해지지 않았습니다.",
        <br />,
        "당신의 마지막 페이지를 완성하세요.",
        <br />,
        <br />,
        "이 이야기는 지극히 당신만의 이야기이므로",
        <br />,
        "편안히 써내려가시면 됩니다.",
      ],
    },
  };
  const styleName = {
    p_style: ["eclipse"],
  };
  return (
    <div className={classNames("P4")}>
      <video autoPlay muted loop>
        <source src={P4Vedio} type="video/mp4" />
      </video>
      <SeparatedTemplate4 data={data} styleName={styleName}></SeparatedTemplate4>
    </div>
  );
}

export default P4;
