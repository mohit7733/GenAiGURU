import React from "react";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Index2 from "./pages/Phase2Pages/index2";
import Index3 from "./pages/Phase2Pages/index3";
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
import SpeakToText from "./pages/Phase2Pages/SpeakToText";
import FeaturedVideo from "./pages/Phase6Pages/FeaturedVideo";
import FeaturedArticles from "./pages/Phase6Pages/FeaturedArticles";
import ArticlesDetails from "./pages/Phase6Pages/ArticlesDetails";
import TermsServices from "./pages/Phase4Pages/TermsServices";
import MobileSettings from "./components/Layout/MoblieSettings";
import SendFeedback from "./components/SendFeedback/SendFeedback";
import PrivacyPolicy from "./components/Privacy & Policy/Privacy&Policy";
import NotificationSettings from "./components/NotificationSettings/Notification.jsx";
import EditPassword from "./components/EditPassword/EditPassword.jsx";
import CustomizeInterest from "./components/CustomizeInterest/CustomizeInterest.jsx";
import NotificationComponent from "./components/NotificationComponent/NotificationComponent.jsx";
import Follow from "./components/NotificationComponent/Follow.jsx";
import Payment from "./components/Payment/checkout.jsx";
import Login from "./pages/Authentication/Login";
import Preview from "./pages/Phase2Pages/preview.jsx";
export const BASE_PATH = "/";

// Public Routes
export const PATH_LOGIN = "/login";
export const PATH_SIGNUP = "/signup";
export const PATH_GOTOMAIL = "/gotomail";
export const PATH_SIGNIN = "/signin";
export const PATH_WELCOME = "/welcome";
export const PATH_ADDINTERESTS = "/addinterests";
export const PATH_FOLLOWEXPERTS = "/followexperts";
export const PATH_REGISTER_COMPLETE = "/completion";
export const PATH_FORGOT_PASSWORD = "/forgotpassword";
export const PATH_LOGIN_POPUP = "/loginpopup";
export const PATH_CREATE_NEW_PASSWORD = "/createnewpassword";
export const PATH_OTP_SCREEN = "/otpscreen";

// Private Routes
export const PREVIEW ="/preview"
export const PATH_PROFILE = "/profile";
export const PATH_SPEAK_TO_TEXT = "/speaktotext";
export const PATH_EDIT_PROFILE = "/editprofile";
export const PATH_SOCIAL_EDIT_PROFILE = "/socialeditprofile";
export const PATH_VIDEO_PLAY = "/videoplay";
export const PATH_FEATURED_CONTENT = "/featuredcontent";
export const PATH_FEATURED_VIDEO = "/featuredvideo";
export const PATH_FEATURED_ARTICLES = "/featuredarticle";
export const PATH_BLOG_DETAILS = "/blogdetails";
export const PATH_ARTICLE_DETAILS = "/articledetails";
export const PATH_TERMS_AND_SERVICES = "/terms&services";
export const PATH_SETTINGS = "/settings";
export const PATH_GURUGOLD = "/gurugold";
export const PATH_LEADERBOARD = "/leaderboard";
export const PATH_MILESTONE = "/milestone";
export const PATH_MOBLIE_SETTINGS = "/mobliesettings";
export const PATH_SEND_FEEDBACK = "/sendfeedback";
export const PATH_PRIVACY_POLICY = "/Privacy&Policy";
export const PATH_NOTIFICATION_SETTINGS = "/notification";
export const PATH_EDIT_PASSWORD = "/editpassword";
export const PATH_CUSTOMIZE_INTEREST = "/interest";
export const PATH_NOTIFICATION = "/notification-alerts";
export const PATH_FOLLOW = "/follow";
export const PATH_PAYMENT = "/payment"

const IndexPage = React.lazy(() => import("./pages/Authentication/Index"));

export function RouterElement() {
  const [logged,setLogged]=useState(JSON.parse(localStorage.getItem("userLoggedIn"))||false)

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
      element: logged != "true" ? <Login /> : <Index2 />,
      exact: true,
    },
    {
      path: "index3",
      name: "index3",
      element: <Index3 />,
      exact: true,
    },
    {
      path: PATH_SPEAK_TO_TEXT,
      name: "speakToText",
      element: logged != "true" ? <Login /> : <SpeakToText />,
      exact: true,
    },
    {
      path: "index7",
      name: "index7",
      element: <Index7 />,
      exact: true,
    },
    {
      path: "write-with-ai",
      name: "index5",
      element: logged != "true" ? <Login /> : <Index5 />,
      exact: true,
    },
    {
      path: "index6",
      name: "index6",
      element: <Index6 />,

      exact: true,
    },
    {
      path: PATH_PROFILE,
      name: "profile",
      element: logged != "true" ? <Login /> : <Profile />,
      exact: true,
    },
    {
      path: PATH_EDIT_PROFILE,
      name: "PATH_EDIT_PROFILE",
      element: logged != "true" ? <Login /> : <EditProfile />,
      exact: true,
    },

    {
      path: PATH_SOCIAL_EDIT_PROFILE,
      name: "PATH_SOCIAL_EDIT_PROFILE",
      element: logged != "true" ? <Login /> : <SocialProfileEdit />,
      exact: true,
    },
    {
      path: PATH_TERMS_AND_SERVICES,
      name: "PATH_TERMS_AND_SERVICES",
      element: <TermsServices />,
      exact: true,
    },
    {
      path: PATH_VIDEO_PLAY,
      name: "PATH_VIDEO_PLAY",
      element: <VideoPlay />,
      exact: true,
    },
    {
      path: "contact",
      name: "gurugenesis",
      element: <GuruGenesis />,
      exact: true,
    },
    {
      path: "gurujournal",
      name: "gurujournal",
      element: logged != "true" ? <Login /> : <GuruJournal />,
      exact: true,
    },
    {
      path: "gurukeeps",
      name: "gurukeeps",
      element: logged != "true" ? <Login /> : <GuruKeeps />,
      exact: true,
    },
    {
      path: "subscriptions",
      name: "subscriptions",
      element: <SubscriptionPlans />,
      exact: true,
    },
    {
      path: PATH_SETTINGS,
      name: "PATH_SETTINGS",
      element: logged != "true" ? <Login /> : <Settings />,
      exact: true,
    },
    {
      path: PATH_GURUGOLD,
      name: "PATH_GURUGOLD",
      element: logged != "true" ? <Login /> : <GuruGold />,
      exact: true,
    },
    {
      path: PATH_LEADERBOARD,
      name: "PATH_LEADERBOARD",
      element: logged != "true" ? <Login /> : <LeaderBoard />,
      exact: true,
    },
    {
      path: PATH_MILESTONE,
      name: "PATH_MILESTONE",
      element: logged != "true" ? <Login /> : <Milestone />,
      exact: true,
    },
    {
      path: "reward",
      name: "reward",
      element: logged != "true" ? <Login /> : <Rewards />,
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
      path: PATH_FEATURED_CONTENT,
      name: PATH_FEATURED_CONTENT,
      element: <FeaturedContent />,
      exact: true,
    },
    {
      path: PATH_FEATURED_VIDEO,
      name: PATH_FEATURED_VIDEO,
      element: <FeaturedVideo />,
    },
    {
      path: PATH_FEATURED_ARTICLES,
      name: PATH_FEATURED_ARTICLES,
      element: <FeaturedArticles />,
      exact: true,
    },
    {
      path: PATH_BLOG_DETAILS,
      name: PATH_BLOG_DETAILS,
      element: <BlogDetails />,
      exact: true,
    },
    {
      path: PATH_ARTICLE_DETAILS,
      name: PATH_ARTICLE_DETAILS,
      element: <ArticlesDetails />,
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
    {
      path: PATH_MOBLIE_SETTINGS,
      name: PATH_MOBLIE_SETTINGS,
      element: logged != "true" ? <Login /> : <MobileSettings />,
      exact: true,
    },
    {
      path: PATH_SEND_FEEDBACK,
      name: PATH_SEND_FEEDBACK,
      element: logged != "true" ? <Login /> : <SendFeedback />,
      exact: true,
    },
    {
      path: PATH_PRIVACY_POLICY,
      name: PATH_PRIVACY_POLICY,
      element: <PrivacyPolicy />,
      exact: true,
    },
    {
      path: PATH_NOTIFICATION_SETTINGS,
      name: PATH_NOTIFICATION_SETTINGS,
      element: logged != "true" ? <Login /> : <NotificationSettings />,
      exact: true,
    },
    {
      path: PATH_EDIT_PASSWORD,
      name: PATH_EDIT_PASSWORD,
      element: logged != "true" ? <Login /> : <EditPassword />,
      exact: true,
    },
    {
      path: PATH_CUSTOMIZE_INTEREST,
      name: PATH_CUSTOMIZE_INTEREST,
      element: logged != "true" ? <Login /> : <CustomizeInterest />,
      exact: true,
    },
    {
      path: PATH_NOTIFICATION,
      name: PATH_NOTIFICATION,
      element: logged != "true" ? <Login /> : <NotificationComponent />,
      exact: true,
    },
    {
      path: PATH_FOLLOW,
      name: PATH_FOLLOW,
      element: logged != "true" ? <Login /> : <Follow />,
      exact: true,
    },
    {
      path: PATH_PAYMENT,
      name: PATH_PAYMENT,
      element: logged != "true" ? <Login /> : <Payment />,
      exact: true,
    },
    {
      path: PREVIEW,
      name: PREVIEW,
      element:logged != "true"?<Login/>: <Preview />,
      exact: true,
    },
  ];

  return useRoutes(routes);
}
