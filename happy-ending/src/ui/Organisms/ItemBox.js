import React from "react";
import Item from "../Molecules/Item";
import ItemCreate from "../Molecules/ItemCreate";
import "../../scss/Organisms/ItemBox.scss";

function ItemBox() {
  return (
    <>
      <Item></Item>

      <div className={"item-create-container"}>
        <ItemCreate></ItemCreate>
      </div>
    </>
  );
}

export default ItemBox;
