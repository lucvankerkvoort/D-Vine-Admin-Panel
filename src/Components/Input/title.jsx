import React from "react";

const Title = ({ setState, state }) => {
  const handleChange = (input) => {
    setState(input);
  };

  return (
    <>
      <label>Title</label>
      <input onChange={(e) => handleChange(e.target.value)} value={state} />
    </>
  );
};

export default Title;
