import { lazy } from "react";

const AddMoney = lazy(() => import("@/Pages/AddMoney"));
const Profile = lazy(() => import("@/Pages/Profile"));
const CashOut = lazy(() => import("@/Pages/User/CashOut"));
const SendMoney = lazy(() => import("@/Pages/User/SendMoney"));


import CommonTransactionHistory from "@/Pages/CommonTransactionHistory";
import WalletInsights from "@/Pages/User/WalletInsights";
import type { ISidebarItems } from "@/types";

export const userSidebarItems: ISidebarItems[] = [
  {
    title: "Overview",

    items: [
      {
        title: "Wallet Insights",
        url: "/user/wallet-insights",
        component: WalletInsights,
      },
      {
        title: "Profile",
        url: "/user/profile",
        component: Profile,
      },
      {
        title: "Transaction History",
        url: "/user/transaction-history",
        component: CommonTransactionHistory,
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
