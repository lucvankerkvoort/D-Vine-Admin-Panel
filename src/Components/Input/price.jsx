import { parse } from "path";
import React from "react";

const Price = ({ price, setPrice }) => {
  return (
    <>
      <label>Price €</label>
      <input
        type="number"
        value={price}
        step={0.01}
        onChange={(e) => {
          setPrice({ price: parseFloat(e.target.value) });
        }}
      />
    </>
  );
};

export default Price;
