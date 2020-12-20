import React, { useContext } from "react";
import Quantity from "../Components/Input/quantity";
import Title from "../Components/Input/title";
import Images from "../Components/Input/images";
import StockItem from "../Components/StockItem/stockitem";
import { InventoryContext } from "../Services/Context/Inventory";

const Stock = () => {
  const inventory = useContext(InventoryContext);
  const { stock } = inventory.state;
  const { changeStockState } = useContext(InventoryContext);

  console.log(stock);

  return (
    <div className="stock">
      {stock.map((item, i) => (
        <StockItem
          key={item.id}
          id={item.id}
          image={item.images}
          title={item.title}
          quantity={item.quantity}
          stock={item.stock}
        />
      ))}
    </div>
  );
};

export default Stock;
