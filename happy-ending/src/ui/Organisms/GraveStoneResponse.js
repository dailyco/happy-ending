import React from "react";
import Button from "../Atoms/Button";
import GraveStone from "../Molecules/GraveStone";
import "../../scss/Organisms/GraveStoneResponse.scss";

function GraveStoneResponse({ data, styleName }) {
  const { gs_data, btn_data } = data;
  const { gs_style, btn_style } = styleName;

  return (
    <div className={"GraveStoneResponse"}>
      <GraveStone data={gs_data} styleName={gs_style}></GraveStone>
      <Button styleName={btn_style}>{btn_data.text}</Button>
    </div>
  );
}

export default GraveStoneResponse;
