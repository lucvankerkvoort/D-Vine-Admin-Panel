import React, { useContext } from "react";
import { InventoryContext } from "../../Services/Context/Inventory";

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
