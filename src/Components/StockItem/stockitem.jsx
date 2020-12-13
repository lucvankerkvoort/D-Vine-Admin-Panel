import React, { useEffect, useState } from "react";
import Images from "../Input/images";
import Quantity from "../Input/quantity";
import Title from "../Input/title";

const StockItem = ({ image, title, quantity, setState, state }) => {
  const [stockQuantity, setQuantity] = useState("");
  const [stockTitle, setTitle] = useState("");

  useEffect(() => {
    setQuantity(quantity);
    setTitle(title);
    setState(...state, quantity, title);
  }, [state]);

  return (
    <div>
      <Images state={[image]} />
      <Quantity setState={setQuantity} state={stockQuantity} />
      <Title setState={setTitle} state={stockTitle} />
    </div>
  );
};

export default StockItem;
