import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FixedAIButtonLogo from "../FixedAIButton/FixedAIButtonLogo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <section className="mainWrapper flex">
        <Sidebar />
        <div className="rightSection">
          <div className="">{children}</div>
          <FixedAIButtonLogo />
          <Outlet/>
        </div>
      </section>
      <Footer />
      <Outlet />

    </div>
  );
};

export default MainLayout;
