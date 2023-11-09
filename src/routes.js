import React from "react";
import { useRoutes } from "react-router-dom";
import Index2 from "./pages/Phase2Pages/index2";
import Index3 from "./pages/Phase2Pages/index3";
// import Index4 from "./pages/Phase2Pages/index4";
import Index5 from "./pages/Phase2Pages/Index5";
import Index6 from "./pages/Phase2Pages/Index6";
import Index7 from "./pages/Phase2Pages/index7";

export const BASE_PATH = "/";

export const PATH_LOGIN = "/login";

const IndexPage = React.lazy(() => import("./pages/Authentication/Index"));
const Login = React.lazy(() => import("./pages/Authentication/Login"));
const Login2 = React.lazy(() => import("./pages/Authentication/login2"));
const Login3 = React.lazy(() => import("./pages/Authentication/login3"));
const Login4 = React.lazy(() => import("./pages/Authentication/login4"));
const Login5 = React.lazy(() => import("./pages/Authentication/login5"));
const Login6 = React.lazy(() => import("./pages/Authentication/login6"));
const Login7 = React.lazy(() => import("./pages/Authentication/login7"));
const Login8 = React.lazy(() => import("./pages/Authentication/login8"));

export function RouterElement() {
  const routes = [
    {
      path: "/",
      name: "IndexPage",
      element: <IndexPage />,
      exact: true,
    },
    {
      path: "login",
      name: "login",
      element: <Login />,
      exact: true,
    },
    {
      path: "login2",
      name: "login2",
      element: <Login2 />,
      exact: true,
    },
    {
      path: "login3",
      name: "login3",
      element: <Login3 />,
      exact: true,
    },
    {
      path: "login4",
      name: "login4",
      element: <Login4 />,
      exact: true,
    },
    {
      path: "login5",
      name: "login5",
      element: <Login5 />,
      exact: true,
    },
    {
      path: "login6",
      name: "login6",
      element: <Login6 />,
      exact: true,
    },
    {
      path: "login7",
      name: "login7",
      element: <Login7 />,
      exact: true,
    },
    {
      path: "Sign-in",
      name: "Sign-in",
      element: <Login8 />,
      exact: true,
    },
    {
      path: "index2",
      name: "index2",
      element: <Index2 />,
      exact: true,
    },
    {
      path: "index3",
      name: "index3",
      element: <Index3 />,
      exact: true,
    },
    {
      path: "index7",
      name: "index7",
      element: <Index7 />,
      exact: true,
    },
    {
      path: "index5",
      name: "index5",
      element: <Index5 />,
      exact: true,
    },
    {
      path: "index6",
      name: "index6",
      element: <Index6 />,
      exact: true,
    },
  ];

  return useRoutes(routes);
}
