import React from "react";

import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <img
        className="avatar"
        src="https://play-lh.googleusercontent.com/ZKbR3ZMjMu_Sk-BqAgWL3FwRGXSBT-TBD63y5m7bqiOvQFU4UyBDpOp1M_d6iS6zlw=w600-h300-pc0xffffff-pd"
        alt=""
      />
      <div className="pages">
        <nav>
          <ul>
            <li className="link">
              <a href="/Home">Home </a>
            </li>
            <li className="link">
              <a href="/MovieFS">Movies</a>
            </li>
            <li className="link">
              <a href="/">TV Show</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
