import { lazy } from "react";

const AddMoney = lazy(() => import("@/Pages/AddMoney"));
const Profile = lazy(() => import("@/Pages/Profile"));
const CashOut = lazy(() => import("@/Pages/User/CashOut"));
const SendMoney = lazy(() => import("@/Pages/User/SendMoney"));
const WalletSummary = lazy(() => import("@/Pages/WalletSummary"));

import type { ISidebarItems } from "@/types";

export const userSidebarItems: ISidebarItems[] = [
  {
    title: "Overview",

    items: [
      {
        title: "Wallet Summary",
        url: "/user/wallet-summary",
        component: WalletSummary,
      },
      {
        title: "Profile",
        url: "/user/profile",
        component: Profile,
      },
    ],
  },
  {
    title: "Transactions",

    items: [
      {
        title: "Add Money",
        url: "/user/add-money",
        component: AddMoney,
      },
      {
        title: "Send Money",
        url: "/user/send-money",
        component: SendMoney,
      },
      {
        title: "Cash Out",
        url: "/user/cash-out",
        component: CashOut,
      },
    ],
  },
];
