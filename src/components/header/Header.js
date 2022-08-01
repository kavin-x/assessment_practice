import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img src="https://img.freepik.com/free-vector/technological-logo-design_1424-39.jpg?w=740&t=st=1659326425~exp=1659327025~hmac=66d8a9805c808b75dc801288ba6dce348301945fa3d3efb42257760aafdf2cee" />
      <div>
        <a href="#">Home</a>
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
