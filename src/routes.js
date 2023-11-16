import React from "react";
import { useRoutes } from "react-router-dom";
import Index2 from "./pages/Phase2Pages/index2";
import Index3 from "./pages/Phase2Pages/index3";
// import Index4 from "./pages/Phase2Pages/index4";
import Index5 from "./pages/Phase2Pages/Index5";
import Index6 from "./pages/Phase2Pages/Index6";
import Index7 from "./pages/Phase2Pages/index7";
import EditProfile from "./pages/Phase3pages/EditProfile";
import SocialProfileEdit from "./pages/Phase3pages/SocialProfileEdit";
import VideoPlay from "./pages/Phase3pages/VideoPlay";
import Profile from "./pages/Phase3pages/Profile";
import GuruGenesis from "./pages/Phase4Pages/GuruGenesis";
import GuruJournal from "./pages/Phase4Pages/GuruJournal";
import GuruKeeps from "./pages/Phase4Pages/GuruKeeps";
import SubscriptionPlans from "./pages/Phase4Pages/SubscriptionPlans";
import Settings from "./pages/Phase4Pages/Settings";
import GuruGold from "./pages/Phase5Pages/GuruGold";
import LeaderBoard from "./pages/Phase5Pages/LeaderBoard";
import Milestone from "./pages/Phase5Pages/Milestone";
import Rewards from "./pages/Phase5Pages/Rewards";
import SilverPopup from "./pages/Phase5Pages/SilverPopup";
import Silver from "./pages/Phase5Pages/Silver";
import FeaturedContent from "./pages/Phase6Pages/FeaturedContent";
import BlogDetails from "./pages/Phase6Pages/BlogDetails";
import FeaturedContentPopup from "./pages/Phase6Pages/FeaturedContentPopup";
import Sortbydate from "./pages/Phase6Pages/Sortbydate";

export const BASE_PATH = "/";

export const PATH_LOGIN = "/login";
export const PATH_SIGNUP = "/signup";
export const PATH_SIGNIN = "/signin";

const IndexPage = React.lazy(() => import("./pages/Authentication/Index"));
const Login = React.lazy(() => import("./pages/Authentication/Login"));
const Login2 = React.lazy(() => import("./pages/Authentication/login2"));
const Login3 = React.lazy(() => import("./pages/Authentication/login3"));
const Login4 = React.lazy(() => import("./pages/Authentication/login4"));
const Login5 = React.lazy(() => import("./pages/Authentication/login5"));
const Login6 = React.lazy(() => import("./pages/Authentication/login6"));
const Login7 = React.lazy(() => import("./pages/Authentication/login7"));
const Login8 = React.lazy(() => import("./pages/Authentication/login8"));

export function RouterElement({ isLogged }) {
  const publicRoutes = [
    {
      path: "/",
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
  ];
  const routes = [
    {
      path: "/",
      name: "IndexPage",
      element: <IndexPage />,
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
    {
      path: "phasepage1",
      name: "phasepage1",
      element: <Profile />,
      exact: true,
    },
    {
      path: "phasepage2",
      name: "phasepage2",
      element: <EditProfile />,
      exact: true,
    },

    {
      path: "phasepage3",
      name: "phasepage3",
      element: <SocialProfileEdit />,
      exact: true,
    },
    {
      path: "phasepage4",
      name: "phasepage4",
      element: <VideoPlay />,
      exact: true,
    },
    {
      path: "gurugenesis",
      name: "gurugenesis",
      element: <GuruGenesis />,
      exact: true,
    },
    {
      path: "gurujournal",
      name: "gurujournal",
      element: <GuruJournal />,
      exact: true,
    },
    {
      path: "gurukeeps",
      name: "gurukeeps",
      element: <GuruKeeps />,
      exact: true,
    },
    {
      path: "subscriptions",
      name: "subscriptions",
      element: <SubscriptionPlans />,
      exact: true,
    },
    {
      path: "settings",
      name: "settings",
      element: <Settings />,
      exact: true,
    },
    {
      path: "gurugold",
      name: "gurugold",
      element: <GuruGold />,
      exact: true,
    },
    {
      path: "leaderboard",
      name: "leaderboard",
      element: <LeaderBoard />,
      exact: true,
    },
    {
      path: "milestone",
      name: "milestone",
      element: <Milestone />,
      exact: true,
    },
    {
      path: "reward",
      name: "reward",
      element: <Rewards />,
      exact: true,
    },
    {
      path: "silverpopup",
      name: "silverpopup",
      element: <SilverPopup />,
      exact: true,
    },
    {
      path: "silver",
      name: "silver",
      element: <Silver />,
      exact: true,
    },
    // Phase 6 Routes
    {
      path: "featuredcontent",
      name: "featuredcontent",
      element: <FeaturedContent />,
      exact: true,
    },
    {
      path: "blogdetails",
      name: "blogdetails",
      element: <BlogDetails />,
      exact: true,
    },
    {
      path: "featuredpopup",
      name: "featuredpopup",
      element: <FeaturedContentPopup />,
      exact: true,
    },
    {
      path: "sortbydate",
      name: "sortbydate",
      element: <Sortbydate />,
      exact: true,
    },
  ];

  return useRoutes(routes);
}
