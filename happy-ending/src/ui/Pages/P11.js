import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import InsertyPaperTemplate from "../Templates/InsertyPaperTemplate";
import P11Video from "../../assets/videos/11-after home.mp4";

import "../../scss/Pages/P11.scss";

function P11() {
  const data = {
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question: [
          "집에서 편안한 휴식을 취한 당신.",
          <br />,
          "평화로운 일상에서 당신은 소소한 행복을 누렸습니다.",
          <br />,
          <br />,
          "이제 4일의 시간이 남았네요.",
          <br />,
          "남은 시간동안 당신의 주변을 돌아보며 정리하는 시간을 가지세요.",
          <br />,
        ],
      },
    },
  };
  const styleName = {
    template_style: ["left", "P11"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white", "line-4"],
    },
    span_style: ["noto", "xs", "white", "light"],
  };

  return (
    <div className={classNames("P11")}>
      <Link to="/p12_1">
        <video autoPlay muted loop>
          <source src={P11Video} type="video/mp4" />
        </video>
        <InsertyPaperTemplate data={data} styleName={styleName}></InsertyPaperTemplate>
      </Link>
    </div>
  );
}

export default P11;
