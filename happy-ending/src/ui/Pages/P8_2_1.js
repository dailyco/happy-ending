import React from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import SingleTextFieldTemplate from "../Templates/SingleTextFieldTemplate";
import P8_2_1_Video from "../../assets/videos/8-2-1-stay home alone.mp4";

import "../../scss/pages.scss";

function P8_2_1({ history }) {
  const [input, onChange] = useInputs({	
    homeDoWhat: localStorage.getItem("homeDoWhat") ?? "",	
    isValidate: false,
  });

  const goBack = () => {
    history.goBack();
  };

  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "집에서 혼자 시간을 보내기로 하셨군요. 무엇을 하면서 보내시겠습니까?",
      },
    },
    stfr_data: {
      to: "/p9_2",
      validate: input.isValidate,
      stfs_data: {
        l_text: "집에서 (",
        placeHolder: "무엇을 한",
        r_text: ")다.",
        tf_data: {	
          input: input.homeDoWhat,	
          name: "homeDoWhat",	
          onChange,	
        },
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    stfr_style: {
      stfs_style: {
        bg_style: ["m", "strong", "charcoal-gray"],
        text_style: ["noto", "s", "normal", "eclipse"],
        tf_style: ["s", "house"],
      },
      btn_style: ["xs", "white"],
    },
  };

  return (
    <div className={classNames("Page", "P8-2-1", "bg-video")}>
      <video autoPlay muted loop>
        <source src={P8_2_1_Video} type="video/mp4" />
      </video>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <SingleTextFieldTemplate data={data} styleName={styleName}></SingleTextFieldTemplate>
    </div>
  );
}

export default P8_2_1;
