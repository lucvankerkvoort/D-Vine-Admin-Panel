import React from "react";

const Description = ({ description, setDescription }) => {
  return (
    <>
      <label>Description</label>
      <textarea
        name="description"
        id="description"
        onChange={(e) => setDescription({ description: e.target.value })}
        value={description}
      />
    </>
  );
};

export default Description;
