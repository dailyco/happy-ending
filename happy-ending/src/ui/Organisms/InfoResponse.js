import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import Info from "../Molecules/Info";

function InfoResponse({data}) {
  const { validate, info_data } = data;

  const onClick = (e) => {
    if (!validate) {
      console.log("텍스트 입력하세요");
      e.preventDefault();
    }
  }

  return (
    <>
      <Info data={info_data}></Info>
      <Link to={"/p5"}>
        <Button styleName={["xxs", "white"]} onClick={onClick}>확인</Button>
      </Link>
    </>
  );
}

export default InfoResponse;
