import React from "react";
import Button from "../Atoms/Button";
import Item from "../Molecules/Item";

import "../../scss/Organisms/ItemBox.scss";

function ItemBox({ data, styleName }) {
  const { state, item_data, onCreate } = data;
  const { messages } = state;
  const { item_style } = styleName;

  return (
    <div className={"ItemBox"}>
      {messages.map((message) => {
        return <Item item={message} data={item_data} key={message.id} styleName={item_style}></Item>;
      })}
      <Button styleName={["item", "lynx-white"]} onClick={onCreate}>+ 추가하기</Button>
    </div>
  );
}

export default ItemBox;
