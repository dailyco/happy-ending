import React from "react";
import classNames from "classnames";
import useInputs from "../reducerInputs";
import SeparatedTemplate14 from "../Templates/SeparatedTemplate14";
import delIcon from "../../assets/icons/will-del.svg";

import "../../scss/pages.scss";

function P14({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const [ state, onCreate, onChange, onRemove ] = useInputs({
    messages: JSON.parse(localStorage.getItem("messages"))
    ? JSON.parse(localStorage.getItem("messages"))
    : [{ id: 1 }],
  });
  
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
    ib_data: {
      state: state,
      onCreate: onCreate,
      item_data: {
        names: ["to", "message"],
        onChange: onChange,
        onRemove: onRemove,
        icon_data: {
          icon_img: delIcon,
          icon_alt: "delete_icon",
        }
      }
    }
  };

  const styleName = {
    tp_style: ["fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    ib_style: {
      item_style: {
        icon_style: ["delete"],
        ta_style: ["item"],
      },
    },
    button_style: ["noto", "xs", "blue", "light"],
  };
  return (
    <div className={classNames("Page", "P14", "fade-in")}>
      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <SeparatedTemplate14 data={data} styleName={styleName}></SeparatedTemplate14>
    </div>
  );
}

export default P14;
