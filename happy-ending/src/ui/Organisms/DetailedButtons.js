import React from "react";
import DetailedButton from "../Molecules/DetailedButton";
import classNames from "classnames";

function DetailedButtons({ data, styleName }) {
  const { print_button_data, home_button_data } = data;

  return (
    <div className={classNames("DetailedButtons")}>
      <DetailedButton data={print_button_data}></DetailedButton>
      <DetailedButton data={home_button_data}></DetailedButton>
    </div>
  );
}

export default DetailedButtons;
