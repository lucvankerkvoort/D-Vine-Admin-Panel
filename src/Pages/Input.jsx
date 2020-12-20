import React, { useContext } from "react";
import AddImage from "../Components/Input/addImage";
import Images from "../Components/Input/images";
import Description from "../Components/Input/description";
import Price from "../Components/Input/price";
import Quantity from "../Components/Input/quantity";
import Rating from "../Components/Input/rating";
import Title from "../Components/Input/title";
import Remove from "../Components/functions/remove";
import Type from "../Components/Input/type";
import { InventoryContext } from "../Services/Context/Inventory";

const Input = (props) => {
  const inventory = useContext(InventoryContext);
  const { changeInputState } = useContext(InventoryContext);
  const {
    title,
    rating,
    quantity,
    type,
    description,
    price,
  } = inventory.state.input;

  const disabled =
    title === "" ||
    rating === 0 ||
    price === 0.0 ||
    type === "" ||
    description === "" ||
    quantity === 0;
  console.log(inventory);
  return (
    <div className="input">
      <AddImage />
      {[].map((image) => {
        return (
          <Remove remove={image}>
            <Images image={image} />
          </Remove>
        );
      })}
      <Title title={title} setTitle={changeInputState} />
      <Rating rating={rating} setRating={changeInputState} />
      <Quantity quantity={quantity} setQuantity={changeInputState} />
      <Price price={price} setPrice={changeInputState} />
      <Description
        description={description}
        setDescription={changeInputState}
      />
      <Type type={type} setType={changeInputState} />
      <button disabled={disabled} onClick={console.log()}>
        Submit
      </button>
    </div>
  );
};

export default Input;
