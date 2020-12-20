import React, { useState } from "react";
import logo from "../Images/Logo.png";
import StockItem from "../Components/StockItem/stockitem";

const Stock = ({ dbInfo }) => {
  const [state, setState] = useState([]);
  const fakeData = [
    {
      image: logo,
      title: "test1",
    },
    {
      image: logo,
      title: "test2",
    },
  ];

  return (
    <div className="stock">
      {fakeData.map((item, i) => (
        <StockItem
          key={i}
          image={item.image}
          title={item.title}
          setState={setState}
          state={state}
        />
      ))}
    </div>
  );
};

export default Stock;
