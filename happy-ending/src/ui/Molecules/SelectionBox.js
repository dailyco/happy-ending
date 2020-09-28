import React from "react";
import Button from "../Atoms/Button";

function SelectionBox({ buttons }) {
  return (
    <>
      {buttons.map((button) => (
        <Button text={button.text}></Button>
      ))}
    </>
  );
}

export default SelectionBox;
