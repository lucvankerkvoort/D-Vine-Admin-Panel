import React, { useContext } from "react";
import { InventoryContext } from "../../Services/Context/Inventory";

const Remove = (props) => {
  const inventory = useContext(InventoryContext);
  const { changeInputState } = useContext(InventoryContext);
  const { images } = inventory.state.input;
  const handleRemove = () => {
    for (let i = 0; i < images.length; i++) {
      if (images[i] === props.remove) {
        images.splice(i, 1);
      }
    }
    changeInputState({ images });
  };

  return (
    <div className="remove">
      {props.children}
      <button onClick={() => handleRemove(props.children)}>remove</button>
    </div>
  );
};

export default Remove;
