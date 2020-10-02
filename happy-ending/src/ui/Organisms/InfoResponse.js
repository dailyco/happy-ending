import React from "react";
import Button from "../Atoms/Button";
import Info from "../Molecules/Info";

function InfoResponse() {
  return (
    <>
      <Info></Info>
      <Button styleName={["xxs", "white"]}>확인</Button>
    </>
  );
}

export default InfoResponse;
