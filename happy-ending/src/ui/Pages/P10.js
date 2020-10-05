import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import InsertyPaperTemplate from "../Templates/InsertyPaperTemplate";
import P10Video from "../../assets/videos/10-after travel.mp4";

import "../../scss/pages.scss";

function P10({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const data = {
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question: [
          "그 동안 꿈꿨던 여행지로 마지막 여행을 다녀온 당신.",
          <br />,
          "당신에게는 영원히 기억될 추억이 생겼습니다.",
          <br />,
          <br />,
          "이제 4일의 시간이 남았네요.",
          <br />,
          "남은 시간동안 주변을 돌아보며 정리하는 시간을 가지세요.",
          <br />,
        ],
      },
    },
  };
  const styleName = {
    template_style: ["left", "P10"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white", "line-4"],
    },
    span_style: ["noto", "xs", "white", "light"],
  };

  return (
    <div className={classNames("Page", "P10", "bg-video")}>
      <Link to="/p12_2">
        <video autoPlay muted loop>
          <source src={P10Video} type="video/mp4" />
        </video>
        <button className={classNames("back", "back-white")} onClick={goBack}></button>
        <InsertyPaperTemplate data={data} styleName={styleName}></InsertyPaperTemplate>
      </Link>
    </div>
  );
}

export default P10;
