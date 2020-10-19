import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";

function SelectionBox({ data, styleName }) {
  const { buttons } = data;
  const { btn_style } = styleName;

  return (
    <div className={"SelectionBox"}>
      {buttons.map((button, index) => (
        <Link to={button.to} key={index}>
          <Button key={index} styleName={btn_style}>{button.text}</Button>
        </Link>
      ))}
    </div>
  );
}

export default SelectionBox;
