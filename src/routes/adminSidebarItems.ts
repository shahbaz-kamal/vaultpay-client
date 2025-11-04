import type { ISidebarItems } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/Pages/Admin/Analytics"));
const ManageAgents = lazy(() => import("@/Pages/Admin/ManageAgents"));
const ManageUsers = lazy(() => import("@/Pages/Admin/ManageUsers"));

export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",

    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "User Management",

    items: [
      {
        title: "Manage Users",
        url: "/admin/manage-users",
        component: ManageUsers,
      },
      {
        title: "Manage Agents",
        url: "/admin/manage-agents",
        component: ManageAgents,
      },
    ],
  },
];
