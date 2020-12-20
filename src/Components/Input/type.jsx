import React from "react";

const Type = ({ type, setType }) => {
  return (
    <select
      name="type"
      id="type"
      value={type}
      onChange={(e) => setType({ type: e.target.value })}
    >
      <option>Choose a type of wine</option>
      <option value="red">Red</option>
      <option value="white">White</option>
      <option value="sparkling">Sparkling</option>
      <option value="rose">Rose</option>
      <option value="other">Other</option>
    </select>
  );
};
export default Type;
