import React, { Suspense } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import Loader from "./components/Loader/Loader";
import Login from "./pages/Authentication/Login";
import {
  PATH_ADDINTERESTS,
  PATH_CREATE_NEW_PASSWORD,
  PATH_FOLLOWEXPERTS,
  PATH_FORGOT_PASSWORD,
  PATH_GOTOMAIL,
  PATH_LOGIN,
  PATH_LOGIN_POPUP,
  PATH_OTP_SCREEN,
  PATH_REGISTER_COMPLETE,
  PATH_SIGNIN,
  PATH_SIGNUP,
  PATH_WELCOME,
  PATH_SPEAK_TO_TEXT,
  RouterElement,

} from "./routes";
import Login2 from "./pages/Authentication/login2";
import Login8 from "./pages/Authentication/login8";
import Login5 from "./pages/Authentication/login5";
import Login6 from "./pages/Authentication/login6";
import Login4 from "./pages/Authentication/login4";
import Login3 from "./pages/Authentication/login3";
import Login7 from "./pages/Authentication/login7";
import CreacteNewPassword from "./pages/Authentication/CreacteNewPassword";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Otpscreen from "./pages/Authentication/Otpscreen";
import LoginPopup from "./pages/Authentication/LoginPopup";
import Cookie from "./components/LevelPopup/Cookie/Cookie";


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
            <Route path={PATH_GOTOMAIL} element={<Login3 />}></Route>
            <Route path={PATH_SIGNIN} element={<Login8 />}></Route>
            <Route path={PATH_WELCOME} element={<Login4 />}></Route>
            <Route path={PATH_ADDINTERESTS} element={<Login5 />}></Route>
            <Route path={PATH_FOLLOWEXPERTS} element={<Login6 />}></Route>
            <Route path={PATH_REGISTER_COMPLETE} element={<Login7 />}></Route>
            <Route
              path={PATH_CREATE_NEW_PASSWORD}
              element={<CreacteNewPassword />}
            ></Route>
            <Route
              path={PATH_FORGOT_PASSWORD}
              element={<ForgotPassword />}
            ></Route>
            <Route path={PATH_OTP_SCREEN} element={<Otpscreen />}></Route>
            <Route path={PATH_LOGIN_POPUP} element={<LoginPopup />}></Route>
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
      <Cookie/>
    </div>
  );
}

export default App;
