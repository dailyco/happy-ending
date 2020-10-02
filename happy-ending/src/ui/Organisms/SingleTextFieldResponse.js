import React from "react";
import Button from "../Atoms/Button";
import SingleTextFieldSentence from "../Molecules/SingleTextFieldSentence";

function SingleTextFieldResponse({ data, styleName }) {
  const { stfs_data } = data;
  const { stfs_style, btn_style } = styleName;

  return (
    <div className={"SingleTextFieldResponse"}>
      <SingleTextFieldSentence data={stfs_data} styleName={stfs_style}></SingleTextFieldSentence>
      <Button styleName={btn_style}>확인</Button>
    </div>
  );
}

export default SingleTextFieldResponse;
