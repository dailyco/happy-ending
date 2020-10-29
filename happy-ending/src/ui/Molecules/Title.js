import React from "react";
import H3 from "../Atoms/H3";
import classNames from "classnames";

function Title({ data, styleName }) {
  const { writer, lastPage } = data;

  return (
    <div className={classNames("Title")}>
      <H3>{writer}</H3>
      <H3>{lastPage}</H3>
    </div>
  );
}

export default Title;
