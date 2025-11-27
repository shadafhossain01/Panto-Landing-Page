import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const General = () => {
  return (
 <>
 <Navbar/>
  <Outlet/>
</>
  )
};

export default General;
