import React from "react";

function Item(props) {
  const { title, img } = props;
  return (
    <div>
      <img src={img} />
      <p>{title}</p>
    </div>
  );
}

export default Item;
