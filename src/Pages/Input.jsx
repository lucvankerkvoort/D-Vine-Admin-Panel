import React, { useState, useEffect } from "react";
import AddImage from "../Components/Input/addImage";
import Images from "../Components/Input/images";
import Description from "../Components/Input/description";
import Price from "../Components/Input/price";
import Quantity from "../Components/Input/quantity";
import Rating from "../Components/Input/rating";
import Title from "../Components/Input/title";
import Remove from "../Components/functions/remove";

const Input = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    // Logic for grabbing data for edit to a existing item
    // e.g. setDescription(userContext.description)
  }, []);

  const handleSubmit = () => {
    //   Logic for sending it to Context API -> DB
  };

  return (
    <div className="input">
      <AddImage setImage={setImages} state={images} />
      {images.map((image) => (
        <Remove>
          <Images image={image} />
        </Remove>
      ))}
      <Title setState={setTitle} state={title} />
      <Rating setState={setRating} state={rating} />
      <Quantity setState={setQuantity} state={quantity} />
      <Price setState={setPrice} state={price} />
      <Description setState={setDescription} state={description} />
      <button onSubmit={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
