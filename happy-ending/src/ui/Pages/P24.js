import React from "react";
import classNames from "classnames";
import SeparatedTemplate24 from "../Templates/SeparatedTemplate24";

import "../../scss/pages.scss";

function P24() {
  const data = {
    dq_data: {
      h3_data: {
        day: 1,
      },
      p_data: {
        question: ["앞으로 당신이 잠들 묘비에", <br />, "남기고 싶은 한마디를 적어주세요."],
      },
    },
    gsr_data: {
      gs_data: {
        tf_data: "( 어떤 )",
        sp1_data: "사람,",
        sp2_data: {
          name: "홍길동",
        },
      },
      btn_data: {
        text: "확인",
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    gsr_style: {
      gs_style: {
        tf_style: ["nanum", "s", "extra-bold", "dark-gray"],
        sp1_style: ["nanum", "s", "extra-bold", "eclipse"],
        sp2_style: ["nanum", "s", "extra-bold", "eclipse"],
        ta_style: ["grave"],
      },
      btn_style: ["xs", "light-gray"],
    },
  };

  return (
    <div className={classNames("Page", "P24")}>
      <SeparatedTemplate24 data={data} styleName={styleName}></SeparatedTemplate24>
    </div>
  );
}

export default P24;
