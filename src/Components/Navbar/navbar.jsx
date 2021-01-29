import React from "react";
import { auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
const Navbar = () => {
  const openNav = () => {
    let nav = document.getElementsByClassName("navbar");

    let anchors = document.getElementsByClassName("navbar-items");

    for (let child of anchors) {
      // console.log("child", child);
      child.classList.add("visible");
    }
    nav[0].style.width = "100px";
  };

  const closeNav = () => {
    let nav = document.getElementsByClassName("navbar");
    nav[0].style.width = "5px";

    let anchors = document.getElementsByClassName("navbar-items");

    for (let child of anchors) {
      // console.log("child", child);
      child.classList.remove("visible");
    }
  };

  return (
    <div className="layer">
      <div
        className="navbar"
        onMouseEnter={() => openNav()}
        onMouseLeave={() => closeNav()}
      >
        <div className="navbar-items">
          <div className="logo" />
          <Link to="/stock" style={{ textDecoration: "none", color: "white" }}>
            Stock
          </Link>
          <Link to="/input" style={{ textDecoration: "none", color: "white" }}>
            Input
          </Link>
          <Link to="/adddeal" style={{ textDecoration: "none", color: "white" }}>
            Add Deal
          </Link>
          <Link to="/addarticle" style={{ textDecoration: "none", color: "white" }}>
            Add Article
          </Link>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
