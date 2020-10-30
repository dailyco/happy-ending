import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import MultiTextFieldSentence from "../Molecules/MultiTextFieldSentence";

function MultiTextFieldResponse({ data, styleName }) {
  const { to, onClick, mtfs_data } = data;
  const { mtfs_style, btn_style } = styleName;

  return (
    <div className={"MultiTextFieldResponse"}>
      <MultiTextFieldSentence data={mtfs_data} styleName={mtfs_style}></MultiTextFieldSentence>
      {to && (
        <Link to={to}>
          <Button styleName={btn_style}>확인</Button>
        </Link>
      )}
      {!to && (
        <Button styleName={btn_style} onClick={onClick}>
          확인
        </Button>
      )}
    </div>
  );
}

export default MultiTextFieldResponse;
