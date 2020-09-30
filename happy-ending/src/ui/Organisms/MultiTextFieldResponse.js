import React from "react";
import Button from "../Atoms/Button";
import MultiTextFieldSentence from "../Molecules/MultiTextFieldSentence";

function MultiTextFieldResponse({ data, styleName }) {
  const { mtfs_data } = data;
  const { mtfs_style, btn_style } = styleName;

  return (
    <div classsName={"MultiTextFieldResponse"}>
      <MultiTextFieldSentence data={mtfs_data} styleName={mtfs_style}></MultiTextFieldSentence>
      <Button styleName={btn_style}>확인</Button>
    </div>
  );
}

export default MultiTextFieldResponse;
