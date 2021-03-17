import React, { useState } from "react";
import { db } from "../../Firebase/Firebase";
import Images from "../Input/images";

const StockItem = ({ images, id, title, quantity, description, price, rating, type }) => {
  const [addStock, setAddStock] = useState(0);
  const [processing, setProcessing] = useState(false);

  const handleClick = () => {
    setProcessing(true);
    const total = parseInt(quantity) + parseInt(addStock);
    db.collection('wine')
      .doc(id)
      .set({
        description,
        quantity: total,
        images,
        price,
        rating,
        title,
        type
      });
    setAddStock(0);
    setProcessing(false);
  }

  return (
    <div className={`stock-item ${id}`}>
      <Images image={images[0]} />
      {/* <Quantity
        quantity={quantity}
        setQuantity={(input) => changeStockState({ id, input })}
      />
      <Title title={title} setTitle={changeStockState} />
      <p>Stock:{stock}</p> */}
      <h4>Title:{title}</h4>
      <label>Enter amount to add</label>
      <input type="number" value={addStock} onChange={e => setAddStock(e.target.value)} />
      <p>Stocks left:{quantity}</p>
      <button disabled={processing} onClick={handleClick}>Add</button>
    </div>
  );
};

export default StockItem;
