import React from "react";
import Button from "../Atoms/Button";

function SelectionBox({ texts }) {
  // TODO: create style code
  // const style = ;

  return (
    <div
    // style = {style}
    >
      {texts.map((text) => (
        <Button text={text}></Button>
      ))}
    </div>
  );
}

export default SelectionBox;
