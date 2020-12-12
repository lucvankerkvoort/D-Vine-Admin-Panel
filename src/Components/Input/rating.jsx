import React from "react";

const Rating = ({ setState, state }) => {
  const handleChange = (input) => {
    setState(input);
  };
  return (
    <>
      <label>Rating</label>
      <input
        type="range"
        min="0"
        max="5"
        step="1"
        value={state}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};

export default Rating;
