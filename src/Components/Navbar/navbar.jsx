import React from "react";
import { auth } from "../../Firebase/Firebase";
const Navbar = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};
export default Navbar;
