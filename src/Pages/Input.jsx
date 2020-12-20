import React, { useState, useEffect, useReducer, useContext } from "react";
import AddImage from "../Components/Input/addImage";
import Images from "../Components/Input/images";
import Description from "../Components/Input/description";
import Price from "../Components/Input/price";
import Quantity from "../Components/Input/quantity";
import Rating from "../Components/Input/rating";
import Title from "../Components/Input/title";
import Remove from "../Components/functions/remove";
import { InputContext } from "../Services/Context/Input";

const Input = (props) => {
  const input = useContext(InputContext);

  return (
    <div className="input">
      <AddImage />
      {(input.state.images || []).map((image) => {
        console.log("image inside map", image);
        return (
          <Remove>
            <Images image={image} />
          </Remove>
        );
      })}
      <Title />
      <Rating />
      <Quantity />
      <Price />
      <Description />
      <button onClick={console.log(input.state)}>Submit</button>
    </div>
  );
};

export default Input;
