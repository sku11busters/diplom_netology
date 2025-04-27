import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Logo = () => {
  return (
    <Link to="/diplom_netology" className="logo-container" id="startLogo">
      Лого
    </Link>
  );
};

export default Logo;
