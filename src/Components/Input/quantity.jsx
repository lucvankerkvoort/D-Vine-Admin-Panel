import React, { useContext } from "react";
import { InputContext } from "../../Services/Context/Input";

const Quantity = () => {
  const input = useContext(InputContext);
  const { addToState } = useContext(InputContext);
  const { quantity } = input.state;

  return (
    <>
      <label>Quantity</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => addToState({ quantity: e.target.value })}
      />
    </>
  );
};
export default Quantity;
