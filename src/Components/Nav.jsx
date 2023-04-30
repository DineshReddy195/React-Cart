import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";

const Navbar = ({ size, setShow }) => {
  return (
    <div className="main">
      <div className="nav">
        <Link to="/Home">
          <div className="logo">React Cart</div>
        </Link>
        <div className="content">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/product">
              <li onClick={() => setShow(true)}>Product</li>
            </Link>
            <Link to="/cart">
              <li onClick={() => setShow(false)}>
                Add To Cart: <b>{size}</b>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
