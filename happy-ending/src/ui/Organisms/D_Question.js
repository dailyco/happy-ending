import React from "react";
import P from "../Atoms/P";
import H3 from "../Atoms/H3";
import "../../scss/Organisms/D_Question.scss";

function D_Question({ day, question, color }) {
  return (
    <>
      <H3 className={color} text={`D-${day}`}></H3>
      <P className={color} text={question}></P>
    </>
  );
}

export default D_Question;
