import React from "react";
import TextField from "../Atoms/TextField";
import classNames from "classnames";

function Info() {
  const [inputs, setInputs] = useState({
    n: localStorage.getItem("name"),
    y: localStorage.getItem("year"),
    m: localStorage.getItem("month"),
    d: localStorage.getItem("day"),
  });

  const {n, y, m, d} = inputs;
  const onChange = (e) => {
    const { key, name, value } = e.target;

    setInputs({
      ...inputs,
      [key]: value,
    });
    // localStorage.setItem(name, value);
    // console.log(localStorage);
  }

  return (
    <div className={classNames("Info")}>
      <div className={classNames("name")}>
        <TextField placeHolder="이름" styleName={["m", "davy-gray, info"]} value={n} onChange={onChange} name="name"></TextField>
      </div>
      <div className={classNames("birthday")}>
        <TextField placeHolder="YY" styleName={["xs", "davy-gray, info"]} value={y} onChange={onChange} name="year"></TextField>
        <TextField placeHolder="MM" styleName={["xs", "davy-gray, info"]} value={m} onChange={onChange} name="month"></TextField>
        <TextField placeHolder="DD" styleName={["xs", "davy-gray, info"]} value={d} onChange={onChange} name="day"></TextField>
      </div>
    </div>
  );
}

export default Info;
