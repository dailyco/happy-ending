import React from "react";
import TextField from "../Atoms/TextField";
import classNames from "classnames";
import "../../scss/Molecules/FullTextField.scss";

function FullTextField({ styleName }) {
  return (
    <div className={classNames("FullTextField", styleName)}>
      <TextField></TextField>
    </div>
  );
}

FullTextField.defaultProps = {
  styleName: ["normal", "little-round", "charcoal-gray"],
};

export default FullTextField;
