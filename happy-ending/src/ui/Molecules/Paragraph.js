import React from "react";
import P from "../Atoms/P";
import classNames from "classnames";

function Paragraph({ data, styleName }) {
  const { header, body } = data;
  const { head_style, body_style } = styleName;
  return (
    <div className={classNames("Paragraph")}>
      <P styleName={head_style}>{header}</P>
      <P styleName={body_style}>{body}</P>
    </div>
  );
}

export default Paragraph;
