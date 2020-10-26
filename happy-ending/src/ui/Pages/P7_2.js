import React from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/pages.scss";

function P7_2({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const [input, onChange] = useInputs({
    keepBank: localStorage.getItem("keepBank") ?? "",
  });

  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: (
          <>
            돼지저금통을 그대로 두기로 했습니다.
            <br />왜 그대로 두었나요?
          </>
        ),
      },
    },
    ftfr_data: {
      to: "/p8",
      ftf_data: {
        tf_data: {
          input: input.keepBank,
          name: "keepBank",
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
    <div className={classNames("Page", "P7-2", "fade-in")}>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P7_2;
