import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages/Authentication/Index";
import Login from "./pages/Authentication/Login";
import Login2 from "./pages/Authentication/login2";
import Login3 from "./pages/Authentication/login3";
import Login4 from "./pages/Authentication/login4";
import Login5 from "./pages/Authentication/login5";
import Login6 from "./pages/Authentication/login6";
import Login7 from "./pages/Authentication/login7";
import Login8 from "./pages/Authentication/login8";
import { RouterElement, publicRoutes } from "./routes";
// import Login2 from "./pages/Authentication/Login2";

function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Suspense fallback="Loading...">
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
          </Suspense>
          <Route index element={<Login />} />
          <Route
            path="login"
            element={
              <React.Suspense fallback={<>...</>}>
                <Login />
              </React.Suspense>
            }
          />
        </Routes>
      </Router> */}
      <Router>
        <Suspense
          fallback={
            <div class="loader">
              <img
                src="app/images/lodingLogo.png"
                alt="Genaiguru logo"
                title="Genaiguru Logo"
              />
            </div>
          }
        >
          <RouterElement />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
