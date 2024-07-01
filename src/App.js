import React from "react";
import Navbar from "./components/Navbar";
import "./CSS/style.css";
import { Outlet } from "react-router-dom";

const AppData = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppData;
