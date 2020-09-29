import React from "react";
import Button from "../Atoms/Button";
import FullTextField from "../Molecules/FullTextField";

function FullTextFieldResponse({ data, styleName }) {
  const { ftf_style, button_style } = styleName;
  const { ftf_data, button_data } = data;
  return (
    <>
      <FullTextField data={ftf_data} styleName={ftf_style}></FullTextField>
      <Button styleName={button_style}>{button_data.text}</Button>
    </>
  );
}

export default FullTextFieldResponse;
