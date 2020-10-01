import React from "react";
import Info from "../Molecules/Info";
import Button from "../Atoms/Button";

function InfoResponse() {
  return (
    <>
      <Info></Info>
      <Button styleName={["xxs", "white"]}>확인</Button>
    </>
  );
}

export default InfoResponse;
