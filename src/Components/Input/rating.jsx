import React, { useContext } from "react";
import { InputContext } from "../../Services/Context/Input";

const Rating = () => {
  const input = useContext(InputContext);
  const { addToState } = useContext(InputContext);
  const { rating } = input.state;
  return (
    <>
      <label>Rating</label>
      <p>{rating}</p>
      <input
        type="range"
        min="0"
        max="5"
        step="1"
        value={rating}
        onChange={(e) => addToState({ rating: e.target.value })}
      />
    </>
  );
};

export default Rating;
