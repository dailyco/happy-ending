import React from "react";
import Decorations from "../Organisms/Decorations";
import Title from "../Molecules/Title";
import Page from "../Organisms/Page";
import DetailedButtons from "../Organisms/DetailedButtons";
import classNames from "classnames";

function SeparatedTemplate29() {
  return (
    <div className={classNames("SeparatedTemplate29")}>
      <Decorations></Decorations>
      <Title></Title>
      <Page></Page>
      <Page></Page>
      <DetailedButtons></DetailedButtons>
    </div>
  );
}

export default SeparatedTemplate29;
