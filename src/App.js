import React, { Suspense } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import Loader from "./components/Loader/Loader";
import Login from "./pages/Authentication/Login";
import { PATH_ADDINTERESTS, PATH_LOGIN, PATH_SIGNIN, PATH_SIGNUP, RouterElement } from "./routes";
import Login2 from "./pages/Authentication/login2";
import Login8 from "./pages/Authentication/login8";
import Login5 from "./pages/Authentication/login5";

function App() {
  return (
    <div>
      <Router>
        {/* Without Layout Pages */}
        {/* <Routes>
          <Route path={PATH_LOGIN} element={<Login />}></Route>
        </Routes> */}
        <Suspense
          fallback={
            <>
              <Loader />
            </>
          }
        >
          <Routes>
            <Route path={PATH_LOGIN} element={<Login />}></Route>
            <Route path={PATH_SIGNUP} element={<Login2 />}></Route>
            <Route path={PATH_SIGNIN} element={<Login8/>}></Route>
            <Route path={PATH_ADDINTERESTS} element={<Login5/>}></Route>
            <Route
              path="/*"
              element={
                <MainLayout>
                  <RouterElement />
                </MainLayout>
              }
            ></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
