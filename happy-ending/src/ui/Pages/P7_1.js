import React from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/pages.scss";

function P7_1({ history }) {
  const [input, onChange] = useInputs({
    breakBank: localStorage.getItem("breakBank") ?? "",
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
        question: (
          <>
            돼지저금통을 깨기로 했습니다.
            <br />
            무엇을 위해 사용할 것인가요?
          </>
        ),
      },
    },
    ftfr_data: {
      to: "/p8",
      validate: input.isValidate,
      ftf_data: {
        tf_data: {
          input: input.breakBank,
          name: "breakBank",
          onChange: onChange,
        },
      },
    },
  };
  const styleName = {
    tp_style: ["fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse", "two-line"],
    },
    ftfr_style: {
      ftf_style: {
        ftf_style: ["charcoal-gray", "normal", "little-round"],
        tf_style: ["xl", "normal", "piggy-bank"],
      },
      button_style: ["xs", "white"],

    },
  };
  return (
    <div className={classNames("Page", "P7-1", "fade-in")}>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P7_1;
