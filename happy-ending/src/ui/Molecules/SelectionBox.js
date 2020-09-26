import React from "react";
import Button from "../Atoms/Button";

function SelectionBox({ objects }) {
  return (
    <>
      {objects.map((object) => (
        <Button text={object.text}></Button>
      ))}
    </>
  );
}

export default SelectionBox;
