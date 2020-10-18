import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import Info from "../Molecules/Info";

function InfoResponse({data}) {
  const { info_data } = data;
  return (
    <>
      <Info data={info_data}></Info>
      <Link to={"/p5"}>
        <Button styleName={["xxs", "white"]}>확인</Button>
      </Link>
    </>
  );
}

export default InfoResponse;
