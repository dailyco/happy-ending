import React from "react";
import classNames from "classnames";
import MultipleChoiceTemplate from "../Templates/MultipleChoiceTemplate";

import "../../scss/pages.scss";

function P8({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: (
          <>
            책상 앞에 앉아 벽에 걸린 여행 사진을 바라보며
            <br />
            죽기 전에 꼭 가보고 싶었던 여행지를 생각합니다.
          </>
        ),
      },
    },
    sr_data: {
      buttons: [
        {
          to: "/p8_1",
          text: "A. 3일간 여행을 떠난다.",
          onClick: () => {
            localStorage.setItem("choice_p8", "travel");
            console.log(localStorage);
          },
        },
        {
          to: "/p8_2",
          text: "B. 3일간 집에 남는다.",
          onClick: () => {
            localStorage.setItem("choice_p8", "home");
            console.log(localStorage);
          },
        },
      ],
    },
  };

  const styleName = {
    tp_style: ["left", "two-btn"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white"],
    },
    sr_style: {
      btn_style: ["xl", "nero"],
    },
  };

  return (
    <div className={classNames("Page", "P8")}>
      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <MultipleChoiceTemplate data={data} styleName={styleName}></MultipleChoiceTemplate>
    </div>
  );
}

export default P8;
