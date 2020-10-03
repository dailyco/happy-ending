import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import MultiTextFieldSentence from "../Molecules/MultiTextFieldSentence";

function MultiTextFieldResponse({ data, styleName }) {
  const { to, mtfs_data } = data;
  const { mtfs_style, btn_style } = styleName;

  return (
    <div classsName={"MultiTextFieldResponse"}>
      <MultiTextFieldSentence data={mtfs_data} styleName={mtfs_style}></MultiTextFieldSentence>
      <Link to={to}>
        <Button styleName={btn_style}>확인</Button>
      </Link>
    </div>
  );
}

export default MultiTextFieldResponse;
