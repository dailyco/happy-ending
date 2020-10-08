import React from "react";
import classNames from "classnames";
import SeparatedTemplate14 from "../Templates/SeparatedTemplate14";

import "../../scss/pages.scss";

function P14({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const data = {
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question: (
          <>
            당신은 유서를 작성하기 위해 책상에 앉았습니다.
            <br />
            앞에 있는 노트에 마지막 말을 남겨주세요.
          </>
        ),
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    ib_style: [],
    button_style: ["noto", "xs", "blue", "light"],
  };
  return (
    <div className={classNames("Page", "P14")}>
      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <SeparatedTemplate14 data={data} styleName={styleName}></SeparatedTemplate14>
    </div>
  );
}

export default P14;
