import React from "react";
import Button from "../Atoms/Button";
import Item from "../Molecules/Item";
import "../../scss/Organisms/ItemBox.scss";

function ItemBox() {
  return (
    <div className={"item-create-container"}>
      <Item></Item>
      <Button styleName={["item", "lynx-white"]}>+ 추가하기</Button>
    </div>
  );
}

export default ItemBox;
