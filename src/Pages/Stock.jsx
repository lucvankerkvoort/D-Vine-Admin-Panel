import React, { useEffect, useState } from "react";
import StockItem from "../Components/StockItem/stockitem";
import { db } from "../Firebase/Firebase";

const Stock = () => {
  const [stocks, setStocks] = useState([]);

  console.log(stocks);

  useEffect(() => {
    db.collection('wine').onSnapshot(snapshot => {
      setStocks(snapshot.docs.map(doc => ({
        id: doc.id,
        stock: doc.data()
      })));
    })
  }, [])
  return (
    <div className="stock">
      {stocks.map(({ id, stock }) => (
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
