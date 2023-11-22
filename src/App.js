import React, { Suspense } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import Loader from "./components/Loader/Loader";
import Login from "./pages/Authentication/Login";
import {
  PATH_ADDINTERESTS,
  PATH_FOLLOWEXPERTS,
  PATH_LOGIN,
  PATH_SIGNIN,
  PATH_SIGNUP,
  PATH_WELCOME,
  RouterElement,
} from "./routes";
import Login2 from "./pages/Authentication/login2";
import Login8 from "./pages/Authentication/login8";
import Login5 from "./pages/Authentication/login5";
import Login6 from "./pages/Authentication/login6";
import Login4 from "./pages/Authentication/login4";

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
          <Routes>
            <Route path={PATH_LOGIN} element={<Login />}></Route>
            <Route path={PATH_SIGNUP} element={<Login2 />}></Route>
            <Route path={PATH_SIGNIN} element={<Login8 />}></Route>
            <Route path={PATH_WELCOME} element={<Login4 />}></Route>
            <Route path={PATH_ADDINTERESTS} element={<Login5 />}></Route>
            <Route path={PATH_FOLLOWEXPERTS} element={<Login6 />}></Route>
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
