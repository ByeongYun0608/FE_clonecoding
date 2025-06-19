import React from "react";
import { CameraIcon, Bars3Icon } from "@heroicons/react/24/outline";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand">
          <CameraIcon className="icon" />
          <span className="logo-text">Album</span>
        </div>
        <Bars3Icon className="menu-icon" />
      </nav>
    </header>
  );
};

export default Header;