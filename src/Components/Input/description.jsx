import React, { useContext } from "react";
import { InputContext } from "../../Services/Context/Input";

const Description = () => {
  const input = useContext(InputContext);
  const { addToState } = useContext(InputContext);
  const { description } = input.state;
  return (
    <>
      <label>Description</label>
      <textarea
        name="description"
        id="description"
        onChange={(e) => addToState({ description: e.target.value })}
        value={description}
      />
    </>
  );
};

export default Description;
