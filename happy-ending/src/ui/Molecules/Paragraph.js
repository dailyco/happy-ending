import React from "react";
import P from "../Atoms/P";
import classNames from "classnames";

function Paragraph() {
  return (
    <div className={classNames("Paragraph")}>
      <P></P>
      <P></P>
    </div>
  );
}

export default Paragraph;
