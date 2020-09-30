import React from "react";
import Span from "../Atoms/Span";
import TextArea from "../Atoms/TextArea";
import TextField from "../Atoms/TextField";
import "../../scss/Molecules/GraveStone.scss";

function GraveStone({ name }) {
  return (
    <div className={"GraveStone"}>
      <section className={"which-person"}>
        <TextField placeHolder="(어떤)" styleName={["s", "extra-bold", "dark-gray"]}></TextField>
        <Span styleName={["s", "eclipse", "left"]}>사람,</Span>
      </section>
      <section className={"name"}>
        <Span styleName={["s", "eclipse", "center"]}>{name}</Span>
      </section>
      <section className={"leaving-message"}>
        <TextArea
          placeHolder="(남기고 싶은 한마디를 적어주세요.&#10;Ex. 세상에 온기를 채우고 떠나다.)"
          styleName={["grave"]}
        ></TextArea>
      </section>
    </div>
  );
}

GraveStone.defaultProps = {
  name: "홍길동",
};

export default GraveStone;
