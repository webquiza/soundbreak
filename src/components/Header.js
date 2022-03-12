import React from "react";
import "./App.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
    </header>
  );
};
export default Header;
