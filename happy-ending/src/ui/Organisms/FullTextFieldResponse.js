import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import FullTextField from "../Molecules/FullTextField";

function FullTextFieldResponse({ data, styleName }) {
  const { ftf_style, button_style } = styleName;
  const { to, ftf_data } = data;
  return (
    <>
      <FullTextField data={ftf_data} styleName={ftf_style}></FullTextField>
      <Link to={to}>
        <Button styleName={button_style}>확인</Button>
      </Link>
    </>
  );
}

export default FullTextFieldResponse;
