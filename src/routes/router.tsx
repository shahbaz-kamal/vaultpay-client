import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";

import { About } from "@/Pages/About";
import AnalyticsAdmin from "@/Pages/Admin/AnalyticsAdmin";
import ManageAgents from "@/Pages/Admin/ManageAgents";
import ManageUsers from "@/Pages/Admin/ManageUsers";
import AnalyticsAgent from "@/Pages/Agent/AnalyticsAgent";

import Login from "@/Pages/Auth/Login";

import Register from "@/Pages/Auth/Register";
import Homepage from "@/Pages/Home/Homepage";
import AnalyticsUser from "@/Pages/User/AnalyticsUser";
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
  // Dashboard routes
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [
      {
        path: "/admin/analytics",
        Component: AnalyticsAdmin,
      },
      {
        path: "/admin/manage-users",
        Component: ManageUsers,
      },
      {
        path: "/admin/manage-agents",
        Component: ManageAgents,
      },
    ],
  },
  {
    path: "/user",
    Component: DashboardLayout,
    children: [
      {
        path: "/user/analytics",
        Component: AnalyticsUser,
      },
    ],
  },
  {
    path: "/agent",
    Component: DashboardLayout,
    children: [
      {
        path: "/agent/analytics",
        Component: AnalyticsAgent,
      },
      {
        path: "/agent/analytics",
        Component: AnalyticsAgent,
      },
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
