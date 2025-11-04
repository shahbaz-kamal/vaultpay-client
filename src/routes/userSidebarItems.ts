import AddMoney from "@/Pages/AddMoney";
import ManageAgents from "@/Pages/Admin/ManageAgents";
import Profile from "@/Pages/Profile";

import CashOut from "@/Pages/User/CashOut";
import WalletSummary from "@/Pages/WalletSummary";
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
        component: ManageAgents,
      },
      {
        title: "Cash Out",
        url: "/user/cash-out",
        component: CashOut,
      },
    ],
  },
];
