import React from "react";

const Remove = (props) => {
  const handleRemove = () => {
    const { state, setState } = props;
    let removableItem = props.children.props.image;
    console.log("state", state, "setState", setState);
    for (let i = 0; i < state.length; i++) {
      console.log("state", state[i]);
      if (state[i] === removableItem) {
        state.splice(i, 1);

        console.log("after removal", state);
      }
    }
    setState(state);
  };

  return (
    <div className="remove">
      {props.children}
      <button onClick={() => handleRemove(props.children)}>remove</button>
    </div>
  );
};

export default Remove;
