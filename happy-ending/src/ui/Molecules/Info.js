import React from "react";
import TextField from "../Atoms/TextField";
import classNames from "classnames";

function Info() {
  return (
    <div className={classNames("Info")}>
      <div className={classNames("name")}>
        <TextField placeHolder="이름" styleName={["m", "davy-gray, info"]}></TextField>
      </div>
      <div className={classNames("birthday")}>
        <TextField placeHolder="YY" maxLength="2" styleName={["xs", "davy-gray, info"]}></TextField>
        <TextField placeHolder="MM" maxLength="2" styleName={["xs", "davy-gray, info"]}></TextField>
        <TextField placeHolder="DD" maxLength="2" styleName={["xs", "davy-gray, info"]}></TextField>
      </div>
    </div>
  );
}

export default Info;
