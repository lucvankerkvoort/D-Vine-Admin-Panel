import React from "react";

const Price = ({ setState, state }) => {
  const handleChange = (input) => {
    setState(input);
  };

  return (
    <>
      <label>Price</label>
      <input
        type="number"
        value={state}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};

export default Price;
