import React from "react";

const Remove = (props) => {
  console.log(props);
  return (
    <div className="remove">
      {props.children}
      <button>remove</button>
    </div>
  );
};

export default Remove;
