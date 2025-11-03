import AnalyticsAdmin from "@/Pages/Admin/AnalyticsAdmin";
import ManageAgents from "@/Pages/Admin/ManageAgents";
import ManageUsers from "@/Pages/Admin/ManageUsers";
import type { ISidebarItems } from "@/types";

export const adminSidebarItems:ISidebarItems[] = [
  {
    title: "Dashboard",

    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: AnalyticsAdmin,
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
