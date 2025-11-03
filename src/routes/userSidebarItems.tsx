import AnalyticsAdmin from "@/Pages/Admin/AnalyticsAdmin";
import ManageAgents from "@/Pages/Admin/ManageAgents";
import ManageUsers from "@/Pages/Admin/ManageUsers";
import AnalyticsUser from "@/Pages/User/AnalyticsUser";
import type { ISidebarItems } from "@/types";

export const userSidebarItems:ISidebarItems[] = [
  {
    title: "Dashboard",

    items: [
      {
        title: "Analytics",
        url: "/user/analytics",
        component: AnalyticsUser,
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
