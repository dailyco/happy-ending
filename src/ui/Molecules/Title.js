import React from "react";
import H3 from "../Atoms/H3";
import classNames from "classnames";

function Title({ data, styleName }) {
  const { titleRef, writer, lastPage } = data;
  const { title_style, writer_style, lastPage_style } = styleName;

  return (
    <div className={classNames("Title", title_style)} ref={titleRef}>
      <H3 styleName={writer_style}>{writer}</H3>
      <H3 styleName={lastPage_style}>{lastPage}</H3>
    </div>
  );
}

export default Title;
