import React from "react";
import Button from "../Atoms/Button";
import GraveStone from "../Molecules/GraveStone";

function GraveStoneResponse() {
  return (
    <div>
      <GraveStone></GraveStone>
      <Button text="확인" size="small" color="white"></Button>
    </div>
  );
}

export default GraveStoneResponse;
