import React from "react";
import Button from "../Atoms/Button";
import Span from "../Atoms/Span";
import classNames from "classnames";

function DetailedButton({ data, styleName }) {
  return (
    <div className={classNames("DetailedButton")}>
      <Button></Button>
      <Span>{data}</Span>
    </div>
  );
}

export default DetailedButton;
