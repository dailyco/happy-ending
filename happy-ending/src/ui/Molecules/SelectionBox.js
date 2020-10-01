import React from "react";
import Button from "../Atoms/Button";
import "../../scss/Molecules/SelectionBox.scss";

function SelectionBox({ buttons }) {
  return (
    <div className={"SelectionBox"}>
      {buttons.map((button) => (
        <Button styleName={button.style}>{button.text}</Button>
      ))}
    </div>
  );
}

export default SelectionBox;
