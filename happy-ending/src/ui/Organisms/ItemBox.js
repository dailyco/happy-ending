import React from "react";
import Item from "../Molecules/Item";
import ItemCreate from "../Molecules/ItemCreate";
import "../../scss/Organisms/ItemBox.scss";

function ItemBox() {
  return (
    <div className={"item-create-container"}>
      <Item></Item>
      <ItemCreate></ItemCreate>
    </div>
  );
}

export default ItemBox;
