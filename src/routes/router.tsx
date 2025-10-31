import App from "@/App";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { About } from "@/Pages/About";
import Login from "@/Pages/Auth/Login";
import { Homepage } from "@/Pages/Home/Homepage";

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
    path: "login",
    Component: Login,
  },
  //Admin Routes
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [{}],
  },
]);
