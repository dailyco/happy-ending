import React from "react";
import Img from "../Atoms/Img";
import Paragraph from "../Molecules/Paragraph";
import classNames from "classnames";

function Page() {
  return (
    <div className={classNames("Page")}>
      <Img></Img>
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
    </div>
  );
}

export default Page;
