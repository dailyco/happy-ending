import React from "react";
import TextField from "../Atoms/TextField";
import classNames from "classnames";
import "../../scss/Molecules/FullTextField.scss";

function FullTextField({ styleName }) {
  const { ftf_style, tf_style } = styleName;
  return (
    <div className={classNames("FullTextField", ftf_style)}>
      <TextField placeHolder="내용을 입력하세요" styleName={tf_style}></TextField>
    </div>
  );
}

FullTextField.defaultProps = {
  styleName: ["normal", "little-round", "charcoal-gray"],
};

export default FullTextField;
