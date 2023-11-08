import React from "react";
import { useRoutes } from "react-router-dom";

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
  ];

  return useRoutes(routes);
}
