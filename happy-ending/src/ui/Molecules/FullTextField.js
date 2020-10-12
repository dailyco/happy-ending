import React from "react";
import TextField from "../Atoms/TextField";
import classNames from "classnames";
import "../../scss/Molecules/FullTextField.scss";

function FullTextField({ data, styleName }) {
  const { tf_data } = data;
  const { ftf_style, tf_style } = styleName;
  return (
    <div className={classNames("FullTextField", ftf_style)}>
      <TextField placeHolder={tf_data.placeHolder} styleName={tf_style} value={tf_data.input.value} onChange={tf_data.onChange} name={tf_data.name}></TextField>
    </div>
  );
}

FullTextField.defaultProps = {
  styleName: ["normal", "little-round", "charcoal-gray"],
};

export default FullTextField;
