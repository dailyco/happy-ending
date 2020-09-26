import React from "react";
import Button from "../Atoms/Button";

function SelectionBox({ texts }) {
  return (
    <>
      {texts.map((text) => (
        <Button text={text}></Button>
      ))}
    </>
  );
}

export default SelectionBox;
