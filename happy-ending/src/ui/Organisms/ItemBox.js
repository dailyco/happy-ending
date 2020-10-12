import React from "react";
import Button from "../Atoms/Button";
import Item from "../Molecules/Item";
import "../../scss/Organisms/ItemBox.scss";

function ItemBox({ data }) {
  const { state, item_data } = data;
  const { messages } = state;

  return (
    <div className={"ItemBox"}>
      {messages.map((message) => {
        return <Item item={message} names={item_data.names} onChange={item_data.onChange} key={message.id}></Item>;
      })}
      <Button styleName={["item", "lynx-white"]} onClick={item_data.onCreate}>+ 추가하기</Button>
    </div>
  );
}

export default ItemBox;
