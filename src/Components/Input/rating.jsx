import React from "react";

const Rating = ({ rating, setRating }) => {
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
        onChange={(e) => setRating({ rating: parseInt(e.target.value) })}
      />
    </>
  );
};

export default Rating;
