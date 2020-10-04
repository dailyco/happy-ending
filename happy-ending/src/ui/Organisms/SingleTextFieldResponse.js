import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import SingleTextFieldSentence from "../Molecules/SingleTextFieldSentence";

function SingleTextFieldResponse({ data, styleName }) {
  const { to, stfs_data } = data;
  const { stfs_style, btn_style } = styleName;

  return (
    <div className={"SingleTextFieldResponse"}>
      <SingleTextFieldSentence data={stfs_data} styleName={stfs_style}></SingleTextFieldSentence>
      <Link to={to}>
        <Button styleName={btn_style}>확인</Button>
      </Link>
    </div>
  );
}

export default SingleTextFieldResponse;
