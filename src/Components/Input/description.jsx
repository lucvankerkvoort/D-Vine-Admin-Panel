import React from "react";

const Description = ({ setState, state }) => {
  const handleChange = (input) => {
    setState(input);
  };

  return (
    <>
      <label>Description</label>
      <textarea
        name="description"
        id="description"
        onChange={(e) => handleChange(e.target.value)}
        value={state}
      />
    </>
  );
};

export default Description;
