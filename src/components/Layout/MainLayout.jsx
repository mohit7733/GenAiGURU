import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FixedAIButtonLogo from "../FixedAIButton/FixedAIButtonLogo";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <section className="mainWrapper flex">
        <Sidebar />
        <div className="rightSection">
          <div className="">{children}</div>
          <FixedAIButtonLogo />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
