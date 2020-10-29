import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import MultiTextFieldSentence from "../Molecules/MultiTextFieldSentence";

function MultiTextFieldResponse({ data, styleName }) {
  const { to, validate, mtfs_data } = data;
  const { mtfs_style, btn_style } = styleName;

  const onClick = (e) => {
    if (!validate) {
      console.log("텍스트 입력하세요");
      e.preventDefault();
    }
  }

  return (
    <div className={"MultiTextFieldResponse"}>
      <MultiTextFieldSentence data={mtfs_data} styleName={mtfs_style}></MultiTextFieldSentence>
      <Link to={to}>
        <Button styleName={btn_style} onClick={onClick}>확인</Button>
      </Link>
    </div>
  );
}

export default MultiTextFieldResponse;
