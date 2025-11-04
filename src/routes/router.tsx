import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";

import { About } from "@/Pages/About";

import Login from "@/Pages/Auth/Login";

import Register from "@/Pages/Auth/Register";
import Homepage from "@/Pages/Home/Homepage";

import Verify from "@/Pages/Verify";
import { generateRoutes } from "@/utils/generateRoute";

import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { agentSidebarItems } from "./agentSidebarItems";

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
  // Dashboard routes
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [{ index: true, element: <Navigate to="/admin/analytics"></Navigate> },...generateRoutes(adminSidebarItems)],
  },
  {
    path: "/user",
    Component: DashboardLayout,
    children: [{ index: true, element: <Navigate to="/user/wallet-summary"></Navigate> },...generateRoutes(userSidebarItems)],
  },
  {
    path: "/agent",
    Component: DashboardLayout,
    children: [{ index: true, element: <Navigate to="/agent/wallet-summary"></Navigate> }, ...generateRoutes(agentSidebarItems)],
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
