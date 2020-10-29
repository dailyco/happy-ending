import React from "react";
import Button from "../Atoms/Button";
import GraveStone from "../Molecules/GraveStone";
import "../../scss/Organisms/GraveStoneResponse.scss";
import { Link } from "react-router-dom";

function GraveStoneResponse({ data, styleName }) {
  const { validate, gs_data, btn_data } = data;
  const { gs_style, btn_style } = styleName;

  const onClick = (e) => {
    if (!validate) {
      console.log("텍스트 입력하세요");
      e.preventDefault();
    }
  }

  return (
    <div className={"GraveStoneResponse"}>
      <GraveStone data={gs_data} styleName={gs_style}></GraveStone>
      <Link to={"/p25"}>
        <Button styleName={btn_style} onClick={onClick}>{btn_data.text}</Button>
      </Link>
    </div>
  );
}

export default GraveStoneResponse;
