import React from "react";

const Images = ({ image }) => {
  return (
    <div
      className="image-placeholder"
      style={{ backgroundImage: `url(${image}}` }}
    />
  );
};

export default Images;
