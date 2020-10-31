import React from "react";
import DetailedButton from "../Molecules/DetailedButton";
import classNames from "classnames";

function DetailedButtons({ data, styleName }) {
  const { print_button_data, home_button_data } = data;
  const { print_button_style, home_button_style } = styleName;

  return (
    <div className={classNames("DetailedButtons")}>
      <DetailedButton data={print_button_data} styleName={print_button_style}></DetailedButton>
      <DetailedButton data={home_button_data} styleName={home_button_style}></DetailedButton>
    </div>
  );
}

export default DetailedButtons;
