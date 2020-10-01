import React from "react";
import Button from "../Atoms/Button";
import MutiTextFieldSentence from "../Molecules/MutiTextFieldSentence";

function MultiTextFieldResponse({ data, styleName }) {
  const { mtfs_data } = data;
  const { mtfs_style, btn_style } = styleName;

  return (
    <div classsName={"MultiTextFieldResponse"}>
      <MutiTextFieldSentence data={mtfs_data} styleName={mtfs_style}></MutiTextFieldSentence>
      <Button styleName={btn_style}>확인</Button>
    </div>
  );
}

export default MultiTextFieldResponse;
