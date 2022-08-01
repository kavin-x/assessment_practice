import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img src="https://www.logodesign.net/logo/eye-and-house-5806ld.png" />
      <div className="links">
        <Link to="/">
          <p>Home</p>
        </Link>
        <a href="#">About</a>
        <Link to="expenses">
          <p>Expenses</p>
        </Link>
        <a href="#">Blog</a>
      </div>
    </div>
  );
}

export default Header;
