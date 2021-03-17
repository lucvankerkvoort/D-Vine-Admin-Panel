import React from "react";

const Quantity = ({ quantity, setQuantity }) => {
  return (
    <>
      <label>Quantity</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity({ quantity: parseInt(e.target.value) })}
      />
    </>
  );
};
export default Quantity;
