import React, { useContext } from "react";
import { InputContext } from "../../Services/Context/Input";

const Price = ({ setState, state }) => {
  const input = useContext(InputContext);
  const { addToState } = useContext(InputContext);
  const { price } = input.state;

  return (
    <>
      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => addToState({ price: e.target.value })}
      />
    </>
  );
};

export default Price;
