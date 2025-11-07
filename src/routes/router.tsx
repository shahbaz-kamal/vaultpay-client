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
import Unauthorized from "@/Pages/Unauthorized";
import { checkAuth } from "@/utils/checkAuth";
import { role } from "@/constants/role";
import type { Trole } from "@/types";
import LoadingPage from "@/components/layouts/LoadingPage";
import SslSuccess from "@/Pages/SslCommerze/SslSuccess";

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
    Component: checkAuth(DashboardLayout, [role.admin, role.superAdmin] as Trole[]),
    children: [{ index: true, element: <Navigate to="/admin/analytics"></Navigate> }, ...generateRoutes(adminSidebarItems)],
  },
  {
    path: "/user",
    Component: checkAuth(DashboardLayout, [role.user] as Trole[]),
    children: [{ index: true, element: <Navigate to="/user/wallet-insights"></Navigate> }, ...generateRoutes(userSidebarItems)],
  },
  {
    path: "/agent",
    Component: checkAuth(DashboardLayout, [role.agent] as Trole[]),
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
  {
    path: "/unauthorized",
    Component: Unauthorized,
  },
  {
    path: "/loading",
    Component: LoadingPage,
  },
  { path: "/transaction/add-money/success", Component: SslSuccess },
]);
