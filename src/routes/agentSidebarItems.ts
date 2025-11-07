import { lazy } from "react";

const AddMoney = lazy(() => import("@/Pages/AddMoney"));
const Profile = lazy(() => import("@/Pages/Profile"));
const WalletSummary = lazy(() => import("@/Pages/User/WalletInsights"));
const CashIn = lazy(() => import("@/Pages/Agent/CashIn"));

import type { ISidebarItems } from "@/types";

export const agentSidebarItems: ISidebarItems[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Wallet Summary",
        url: "/agent/wallet-summary",
        component: WalletSummary,
      },
      {
        title: "Profile",
        url: "/agent/profile",
        component: Profile,
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "Add Money",
        url: "/agent/add-money",
        component: AddMoney,
      },
      {
        title: "Cash In",
        url: "/agent/cash-in",
        component: CashIn,
      },
    ],
  },
];
