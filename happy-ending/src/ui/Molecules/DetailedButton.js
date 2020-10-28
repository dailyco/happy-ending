import React from "react";
import Button from "../Atoms/Button";
import Span from "../Atoms/Span";
import classNames from "classnames";

function DetailedButton() {
  return (
    <div className={classNames("DetailedButton")}>
      <Button></Button>
      <Span></Span>
    </div>
  );
}

export default DetailedButton;
