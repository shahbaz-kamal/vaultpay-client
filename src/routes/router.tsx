import App from "@/App";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { About } from "@/Pages/About";
import Login from "@/Pages/Auth/Login";

import Register from "@/Pages/Auth/Register";
import  Homepage  from "@/Pages/Home/Homepage";
import Verify from "@/Pages/Verify";


import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      // public routes
      { index: true, Component: Homepage },
      { path: "about", Component: About },

      // Protected Routes
    ],
  },
  //auth routes
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify",
    Component: Verify,
  },
  //Admin Routes
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [{}],
  },
]);
