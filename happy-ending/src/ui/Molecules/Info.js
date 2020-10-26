import React from "react";
import classNames from "classnames";
import TextField from "../Atoms/TextField";

function Info({data}) {
  const { inputs, names, onChange } = data;
  const { name, year, month, day } = inputs;

  return (
    <div className={classNames("Info")}>
      <div className={classNames("name")}>
        <TextField placeHolder="이름" styleName={["m", "davy-gray", "info"]} value={name} onChange={onChange} name={names[0]}></TextField>
      </div>
      <div className={classNames("birthday")}>
        <TextField placeHolder="YY" maxLength="2" styleName={["xs", "davy-gray", "info"]} value={year} onChange={onChange} name={names[1]}></TextField>
        <TextField placeHolder="MM" maxLength="2" styleName={["xs", "davy-gray", "info"]} value={month} onChange={onChange} name={names[2]}></TextField>
        <TextField placeHolder="DD" maxLength="2" styleName={["xs", "davy-gray", "info"]} value={day} onChange={onChange} name={names[3]}></TextField>
      </div>
    </div>
  );
}

export default Info;
