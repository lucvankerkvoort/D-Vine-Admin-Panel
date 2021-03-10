import React, { useContext,useEffect,useState } from "react";
import Quantity from "../Components/Input/quantity";
import Title from "../Components/Input/title";
import Images from "../Components/Input/images";
import StockItem from "../Components/StockItem/stockitem";
import { InventoryContext } from "../Services/Context/Inventory";
import {db} from "../Firebase/Firebase";

const Stock = () => {
  const inventory = useContext(InventoryContext);
  //const { stock } = inventory.state;
  const { changeStockState } = useContext(InventoryContext);
  const [stocks,setStocks]=useState([]);

  console.log(stocks);

  useEffect(()=>{
    db.collection('wine').onSnapshot(snapshot=>{
        setStocks(snapshot.docs.map(doc=>({
            id:doc.id,
            stock:doc.data()})));
    })
},[])
  return (
    <div className="stock">
      {stocks.map(({id,stock}) => (
        <StockItem
          key={id}
          id={id}
          images={stock.images}
          title={stock.title}
          quantity={stock.quantity}
          stock={stock.quantity}
          description={stock.description}
          price={stock.price}
          rating={stock.rating}
          type={stock.type}
        />
      ))}
    </div>
  );
};

export default Stock;
