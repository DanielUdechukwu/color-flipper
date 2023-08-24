import React from "react";
import "./Nav.css"
import "../index.css"

const Nav = () => {
  return (
    <>
      <nav>
        <h1 className="nav-title">Color Flipper</h1>
        <div className="mode-select">
          <a href="#">Simple</a>
          <a href="#">Hex</a>
        </div>
      </nav>
    </>
  )
}

export default Nav