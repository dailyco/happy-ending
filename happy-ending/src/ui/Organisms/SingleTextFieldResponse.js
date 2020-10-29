import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import SingleTextFieldSentence from "../Molecules/SingleTextFieldSentence";

function SingleTextFieldResponse({ data, styleName }) {
  const { to, validate, stfs_data } = data;
  const { stfs_style, btn_style } = styleName;

  const onClick = (e) => {
    if (!validate) {
      console.log("텍스트 입력하세요");
      e.preventDefault();
    }
  }

  return (
    <div className={"SingleTextFieldResponse"}>
      <SingleTextFieldSentence data={stfs_data} styleName={stfs_style}></SingleTextFieldSentence>
      <Link to={to}>
        <Button styleName={btn_style} onClick={onClick}>확인</Button>
      </Link>
    </div>
  );
}

export default SingleTextFieldResponse;
