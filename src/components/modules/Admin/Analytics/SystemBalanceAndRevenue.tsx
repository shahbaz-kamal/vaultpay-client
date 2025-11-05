import { UserCheck, UserPlus, Users } from "lucide-react";
import { Wallet, PiggyBank, Coins, HandCoins } from "lucide-react";
import CardGrid from "./CardGrid";
import { PieChartActive } from "./PieChartActive";
import { TCardDisplayDataType, type DashboardCard } from "@/types";

export default function SystemBalanceAndRevenue() {
  // const cardObject:DashboardCard[] = [
  //     {
  //       title: "Total system balance ",
  //       icon: <Users className="w-5 h-5" style={{ color: "var(--chart-1)" }} />,
  //       data: 500,
  //       description: "",
  //     },
  //     {
  //       title: "Average user wallet balance ",
  //       icon: <UserCheck className="w-5 h-5" style={{ color: "var(--chart-2)" }} />,
  //       data: 245,
  //       description: "",
  //     },
  //     {
  //       title: "Total system revenue ",
  //       icon: <UserPlus className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
  //       data: 120,
  //       description: "",
  //     },
  //     {
  //       title: "Agent commission payouts",
  //       icon: <UserPlus className="w-5 h-5" style={{ color: "var(--chart-4)" }} />,
  //       data: 3500,
  //       description: "",
  //     },
  //   ];

  const cardObject: DashboardCard[] = [
    {
      title: "Total system balance",
      icon: <Wallet className="w-5 h-5" style={{ color: "var(--chart-1)" }} />,
      data: 500,
      description: "Total funds currently held in the system wallet",
    },
    {
      title: "Average user wallet balance",
      icon: <PiggyBank className="w-5 h-5" style={{ color: "var(--chart-2)" }} />,
      data: 245,
      description: "Average wallet balance across all registered users",
    },
    {
      title: "Total system revenue",
      icon: <Coins className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: 120,
      description: "Total revenue generated from all platform transactions",
    },
    {
      title: "Agent commission payouts",
      icon: <HandCoins className="w-5 h-5" style={{ color: "var(--chart-4)" }} />,
      data: 3500,
      description: "Total commissions distributed to agents so far",
    },
  ];
  return (
    <div className="space-y-6">
      <CardGrid cardObject={cardObject} cardDisplayDataType={TCardDisplayDataType.moneyCount}></CardGrid>
    </div>
  );
}
