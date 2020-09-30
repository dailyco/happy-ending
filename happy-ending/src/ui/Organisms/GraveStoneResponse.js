import React from "react";
import Button from "../Atoms/Button";
import GraveStone from "../Molecules/GraveStone";
import "../../scss/Organisms/GraveStoneResponse.scss";

function GraveStoneResponse() {
  return (
    <div className={"GraveStoneResponse"}>
      <GraveStone></GraveStone>
      <section className={"btn-container"}>
        <Button styleName={["xs", "light-gray"]}>확인</Button>
      </section>
    </div>
  );
}

export default GraveStoneResponse;
