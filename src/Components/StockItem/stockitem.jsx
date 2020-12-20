import React, { useContext } from "react";
import { InventoryContext } from "../../Services/Context/Inventory";
import Images from "../Input/images";
import Quantity from "../Input/quantity";
import Title from "../Input/title";

const StockItem = ({ image, id, title, quantity, stock }) => {
  const { changeStockState } = useContext(InventoryContext);

  return (
    <div className={`stock-item ${id}`}>
      <Images image={image} />
      <Quantity
        quantity={quantity}
        setQuantity={(input) => changeStockState({ id, input })}
      />
      <Title title={title} setTitle={changeStockState} />
      <p>Stock:{stock}</p>
    </div>
  );
};

export default StockItem;
