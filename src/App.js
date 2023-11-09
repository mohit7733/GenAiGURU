import React, { Suspense } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import { RouterElement } from "./routes";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div>
      <Router>
        <Suspense
          fallback={
            <>
              <Loader />
            </>
          }
        >
          {/* <Header />
          <section className="mainWrapper flex">
            <Sidebar />
            <div className="rightSection">
              <RouterElement />
            </div>
          </section>

          <Footer /> */}
          <RouterElement />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
