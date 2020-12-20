import React, { useContext } from "react";
import { InputContext } from "../../Services/Context/Input";

const Title = () => {
  const input = useContext(InputContext);
  const { addToState } = useContext(InputContext);
  const { title } = input.state;

  return (
    <>
      <label>Title</label>
      <input
        onChange={(e) => addToState({ title: e.target.value })}
        value={title}
      />
    </>
  );
};

export default Title;
