import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FixedAIButtonLogo from "../FixedAIButton/FixedAIButtonLogo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div>
      <section className="">
        <div className="">{children}</div>
        <FixedAIButtonLogo />
        <Outlet />
      </section>
      <Outlet />
    </div>
  );
};

export default MainLayout;
