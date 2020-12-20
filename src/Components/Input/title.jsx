import React from "react";

const Title = ({ title, setTitle }) => {
  return (
    <>
      <label>Title</label>
      <input
        onChange={(e) => setTitle({ title: e.target.value })}
        value={title}
      />
    </>
  );
};

export default Title;
