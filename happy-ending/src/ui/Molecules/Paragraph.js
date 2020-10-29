import React from "react";
import P from "../Atoms/P";
import classNames from "classnames";

function Paragraph({ data, styleName }) {
  const { header, body } = data;
  return (
    <div className={classNames("Paragraph")}>
      <P>{header}</P>
      <P>{body}</P>
    </div>
  );
}

export default Paragraph;
