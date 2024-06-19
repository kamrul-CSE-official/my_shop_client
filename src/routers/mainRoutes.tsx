import { createBrowserRouter } from "react-router-dom";
import MainTemplets from "@/templets/mainTemplets";
import PrivateRoute from "./privateRoutes";
import ProfilePage from "@/pages/profile";
import HomePage from "@/pages/home";
import SignupPage from "@/pages/signup";
import LoginPage from "@/pages/login";
import AboutPage from "@/pages/about";
import PageNotFoundPage from "@/pages/4o4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplets />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFoundPage />,
  },
]);

export default router;
