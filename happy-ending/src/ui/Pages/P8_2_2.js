import React from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import MultiTextFieldTemplate from "../Templates/MultiTextFieldTemplate";

import "../../scss/pages.scss";

function P8_2_2({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const [inputs, onChange] = useInputs({
    homeDoWith: localStorage.getItem("homeDoWith") ?? "",
    homeDoWhat: localStorage.getItem("homeDoWhat") ?? "",
  });

  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "집에서 함께 시간을 보내기로 하셨군요. 무엇을 하면서 보내시겠습니까?",
      },
    },
    mtfr_data: {
      to: "/p9_2",
      mtfs_data: {
        l_text: "집에서 (",
        ph1: "누구",
        m_text: ")와/과 함께 (",
        ph2: "무엇을 한",
        r_text: ")다.",
        tf1_data: {
          input1: inputs.homeDoWith,
          name1: "homeDoWith",
          onChange1: onChange,
        },
        tf2_data: {
          input2: inputs.homeDoWhat,
          name2: "homeDoWhat",
          onChange2: onChange,
        },
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse", "close"],
      p_style: ["eclipse", "close"],
    },
    mtfr_style: {
      mtfs_style: {
        bg_style: ["m", "strong", "charcoal-gray"],
        l_text_style: ["noto", "s", "normal", "eclipse"],
        tf1_style: ["s", "davy-gray"],
        m_text_style: ["noto", "s", "normal", "eclipse"],
        tf2_style: ["s", "davy-gray"],
        r_text_style: ["noto", "s", "normal", "eclipse"],
      },
      btn_style: ["xs", "white", "close"],
    },
  };

  return (
    <div className={classNames("Page", "P8-2-2")}>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <MultiTextFieldTemplate data={data} styleName={styleName}></MultiTextFieldTemplate>
    </div>
  );
}

export default P8_2_2;
