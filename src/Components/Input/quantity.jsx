import React from "react";

const Quantity = ({ setState, state }) => {
  const handleChange = (input) => {
    setState(input);
  };

  return (
    <>
      <label>Quantity</label>
      <input
        type="number"
        value={state}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};
export default Quantity;
