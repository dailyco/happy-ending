import React from "react";
import DetailedButton from "../Molecules/DetailedButton";
import classNames from "classnames";

function DetailedButtons() {
  return (
    <div className={classNames("DetailedButtons")}>
      <DetailedButton></DetailedButton>
      <DetailedButton></DetailedButton>
    </div>
  );
}

export default DetailedButtons;
