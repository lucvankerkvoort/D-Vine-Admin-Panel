import React from "react";
import { auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
const Navbar = () => {
  const openNav = (e) => {
    // console.log(e.target);
    let nav = e.target;

    if (nav.className === "navbar") {
      let anchors = document.getElementsByClassName("navbar-items");

      for (let child of anchors) {
        // console.log("child", child);
        child.classList.add("visible");
      }
      nav.style.width = "100px";
    }
  };

  const closeNav = (e) => {
    let nav = e.target;

    if (nav.className === "navbar") {
      nav.style.width = "5px";

      let anchors = document.getElementsByClassName("navbar-items");

      for (let child of anchors) {
        // console.log("child", child);
        child.classList.remove("visible");
      }
    }
  };

  return (
    <div className="layer">
      <div
        className="navbar"
        onMouseEnter={(e) => openNav(e)}
        onMouseLeave={(e) => closeNav(e)}
      >
        <div className="navbar-items">
          <div className="logo" />
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
