import AddMoney from "@/Pages/AddMoney";
import ManageAgents from "@/Pages/Admin/ManageAgents";

import Profile from "@/Pages/Profile";
import WalletSummary from "@/Pages/WalletSummary";

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
        component: ManageAgents,
      },
    ],
  },
];
