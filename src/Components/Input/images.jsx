import { url } from "inspector";
import React from "react";

const Images = ({ state }) => {
  return (
    <>
      {(state || []).map((image) => (
        <div
          className="image-placeholder"
          style={{ backgroundImage: `url(${image}}` }}
        />
      ))}
    </>
  );
};

export default Images;
