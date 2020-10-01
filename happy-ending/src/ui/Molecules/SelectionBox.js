import React from "react";
import Button from "../Atoms/Button";
import "../../scss/Molecules/SelectionBox.scss";

function SelectionBox({ data, styleName }) {
  const { buttons } = data;
  const { btn_style } = styleName;

  return (
    <div className={"SelectionBox"}>
      {buttons.map((button) => (
        <Button styleName={btn_style}>{button.text}</Button>
      ))}
    </div>
  );
}

export default SelectionBox;
